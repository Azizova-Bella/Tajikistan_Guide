import React, { useEffect, useState } from 'react'
import Istiqlol from '../../../assets/istiglol.jpg'
import National_lb from '../../../assets/national_lb.jpg'
import Tj from '../../../assets/tj.jpg'
import './slider.css'
import { Modal, Box, TextField, Button } from '@mui/material'
import { Send, X } from 'lucide-react'
import { toast } from 'react-hot-toast'

const slides = [
  {
    id: 1,
    image: Tj,
    title: 'Explore Tajikistan, Festivals & Culture',
    subtitle: 'Explore Tajikistan with Our Package',
    button1: 'Contact Us',
    button2: 'Packages',
  },
  {
    id: 2,
    image: National_lb,
    title: 'Discover Tajikistan',
    subtitle: 'Mountains, Culture & Tradition',
    button1: 'Explore Now',
    button2: 'View Packages',
  },
  {
    id: 3,
    image: Istiqlol,
    title: 'Taste the National Cuisine',
    subtitle: 'Delicious Dishes Await You',
    button1: 'Reserve Table',
    button2: 'View Menu',
  },
]

export default function Slider() {
  const [current, setCurrent] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const message = `
📝 New Contact Form Submission:
👤 Name: ${formData.name}
👥 Surname: ${formData.surname}
📧 Email: ${formData.email}
    `.trim()

    const BOT_TOKEN = '7766547611:AAGB8SFWPkMlRQ5ZlJ5SfnZ1G1qzVFHUB8A'
    const CHAT_ID = 5462887942

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      })

      toast.success('✅ Message sent successfully!')
      setFormData({ name: '', surname: '', email: '' })
      setShowForm(false)
      window.open('https://t.me/TJKGuideBot', '_blank')
    } catch (error) {
      toast.error('❌ Failed to send message. Try again.')
      console.error('Telegram Error:', error)
    }
  }

  return (
    <div className='slider' style={{ backgroundImage: `url(${slide.image})` }}>
      <div className='slider__overlay'>
        <p className='slider__subtitle'>{slide.subtitle}</p>
        <h1 className='slider__title'>{slide.title}</h1>
        <div className='slider__buttons'>
          {slide.button1 === 'Contact Us' ? (
            <button className='slider__btn pink' onClick={() => setShowForm(true)}>
              {slide.button1}
            </button>
          ) : (
            <button className='slider__btn pink'>{slide.button1}</button>
          )}
          <button className='slider__btn outlined'>{slide.button2}</button>
        </div>

        {/* === Modal Form === */}
        <Modal open={showForm} onClose={() => setShowForm(false)}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>📩 Contact Us</h2>

            <TextField
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Your Surname"
              variant="outlined"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<Send size={18} />}
              sx={{ borderRadius: '10px', textTransform: 'none' }}
            >
              Send to Telegram
            </Button>

            <Button
              variant="outlined"
              color="error"
              startIcon={<X size={18} />}
              onClick={() => setShowForm(false)}
              sx={{ borderRadius: '10px', textTransform: 'none' }}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
