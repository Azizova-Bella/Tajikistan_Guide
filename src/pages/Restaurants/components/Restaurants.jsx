'use client'

import { useState, useEffect } from 'react'
import { Utensils } from 'lucide-react';
// Restaurant data with more options
const restaurants = [
	{
		id: 1,
		name: 'Chaykhona Rohat',
		location: 'Dushanbe, Rudaki Ave',
		rating: 4.8,
		phone: '+992 37 221 01 02',
		website: 'https://rohat.tj',
		image:
			'https://avatars.mds.yandex.net/get-altay/9833880/2a00000192d049789973a8964328eaf5f094/L_height',
		cuisine: 'Traditional Tajik',
	},
	{
		id: 2,
		name: 'Bukhara Restaurant',
		location: 'Dushanbe, Somoni Street',
		rating: 4.5,
		phone: '+992 37 223 11 22',
		website: 'https://bukhara.tj',
		image:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/2c/fc/bd/photo0jpg.jpg?w=600&h=400&s=1',
		cuisine: 'Uzbek & Tajik',
	},
	{
		id: 3,
		name: 'Cafe Segafredo',
		location: 'Khujand, Lenin Street',
		rating: 4.7,
		phone: '+992 34 224 55 77',
		website: 'https://segafredo.tj',
		image:
			'https://wte.am/upload/resize_cache/iblock/914/800_420_2/6pfdwkt6e6fjlhjw6i6ylcgj9lptiyrq.jpeg',
		cuisine: 'Italian & Coffee',
	},
	{
		id: 4,
		name: 'Traktir',
		location: 'Dushanbe, Ismoili Somoni Ave',
		rating: 4.6,
		phone: '+992 37 224 88 99',
		website: 'https://traktir.tj',
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/0e/c9/2a/c3/caption.jpg',
		cuisine: 'Russian & European',
	},
	{
		id: 5,
		name: 'Salsa',
		location: 'Dushanbe, Rudaki Ave 127',
		rating: 4.4,
		phone: '+992 93 880 08 80',
		website: 'https://salsa.tj',
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/36/salsa.jpg',
		cuisine: 'Mexican & Latin American',
	},
	{
		id: 6,
		name: 'Merve Restaurant',
		location: 'Dushanbe, Rudaki Ave 106',
		rating: 4.3,
		phone: '+992 37 224 83 83',
		website: 'https://merve.tj',
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/15/01/e0/46/merve.jpg',
		cuisine: 'Turkish & Mediterranean',
	},
	{
		id: 7,
		name: 'Dodo Pizza',
		location: 'Dushanbe, Ismoili Somoni Ave 59/1',
		rating: 4.2,
		phone: '+992 88 888 6633',
		website: 'https://dodopizza.tj',
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/1c/cc/5c/d5/dodo-pizza.jpg',
		cuisine: 'Pizza & Fast Food',
	},
	{
		id: 8,
		name: 'Sadbarg',
		location: 'Khujand, Ismoili Somoni Street 184',
		rating: 4.5,
		phone: '+992 92 777 7070',
		website: 'https://sadbarg.tj',
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/0d/53/95/dd/getlstd-property-photo.jpg',
		cuisine: 'Traditional Tajik',
	},
]

// Icons as React components
const MapPinIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
		<circle cx='12' cy='10' r='3'></circle>
	</svg>
)

const CutleryIcon = ({ darkMode }) => (
  <Utensils color={darkMode ? '#e6e6e6' : '#1f1f1f'} size={26} />
);




const StarIcon = ({ filled }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill={filled ? 'currentColor' : 'none'}
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
	</svg>
)

const PhoneIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
	</svg>
)

const GlobeIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<circle cx='12' cy='12' r='10'></circle>
		<line x1='2' y1='12' x2='22' y2='12'></line>
		<path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
	</svg>
)

const HeartIcon = ({ filled }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill={filled ? '#f43f5e' : 'none'}
		stroke={filled ? '#f43f5e' : 'currentColor'}
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
	</svg>
)

const SearchIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='18'
		height='18'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<circle cx='11' cy='11' r='8'></circle>
		<line x1='21' y1='21' x2='16.65' y2='16.65'></line>
	</svg>
)

// Main App Component
export default function App() {
	const [darkMode, setDarkMode] = useState(() => {
		// Get initial dark mode state from localStorage
		if (typeof window !== 'undefined') {
			return localStorage.getItem('theme') === 'dark'
		}
		return false
	})

	const [searchTerm, setSearchTerm] = useState('')
	const [favorites, setFavorites] = useState({})
	const [loadedImages, setLoadedImages] = useState({})
	const [hoveredCards, setHoveredCards] = useState({})
	const [hoveredButtons, setHoveredButtons] = useState({})

	// Update document class and localStorage when dark mode changes
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [darkMode])

	// Toggle dark mode
	const toggleDarkMode = () => setDarkMode(prev => !prev)

	// Filter restaurants based on search term
	const filteredRestaurants = restaurants.filter(
		restaurant =>
			restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			restaurant.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
			restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
	)

	// Toggle favorite status
	const toggleFavorite = id => {
		setFavorites(prev => ({
			...prev,
			[id]: !prev[id],
		}))
	}

	// Handle image load
	const handleImageLoad = id => {
		setLoadedImages(prev => ({
			...prev,
			[id]: true,
		}))
	}

	// Handle card hover
	const handleCardHover = (id, isHovered) => {
		setHoveredCards(prev => ({
			...prev,
			[id]: isHovered,
		}))
	}

	// Handle button hover
	const handleButtonHover = (id, isHovered) => {
		setHoveredButtons(prev => ({
			...prev,
			[id]: isHovered,
		}))
	}

	// Generate star rating
	const renderStars = rating => {
		const stars = []
		const fullStars = Math.floor(rating)
		const hasHalfStar = rating % 1 >= 0.5

		for (let i = 0; i < 5; i++) {
			if (i < fullStars) {
				stars.push(<StarIcon key={i} filled={true} />)
			} else if (i === fullStars && hasHalfStar) {
				stars.push(
					<div
						key={i}
						style={{ position: 'relative', display: 'inline-block' }}
					>
						<StarIcon filled={false} />
						<div
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '50%',
								overflow: 'hidden',
							}}
						>
							<StarIcon filled={true} />
						</div>
					</div>
				)
			} else {
				stars.push(<StarIcon key={i} filled={false} />)
			}
		}
		return stars
	}

	// Styles
	const styles = {
		app: {
			backgroundColor: darkMode ? '#1a1a1a' : '#f8f9fa',
			color: darkMode ? '#e6e6e6' : '#333',
			minHeight: '100vh',
			transition: 'all 0.3s ease',
		},
		container: {
			maxWidth: '1200px',
			margin: '0 auto',
			padding: '40px 20px',
		},
		header: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginBottom: '30px',
		},
		title: {
			fontSize: '2rem',
			fontWeight: 'bold',
			color: darkMode ? '#e6e6e6' : '#333',
			margin: 0,
			display: 'flex',
			alignItems: 'center',
			gap: '0.5rem',
		},

		searchContainer: {
			position: 'relative',
			maxWidth: '500px',
			margin: '0 auto 30px',
		},
		searchInput: {
			width: '100%',
			padding: '12px 12px 12px 40px',
			borderRadius: '8px',
			border: darkMode ? '1px solid #444' : '1px solid #ddd',
			backgroundColor: darkMode ? '#333' : '#fff',
			color: darkMode ? '#e6e6e6' : '#333',
			fontSize: '16px',
			outline: 'none',
			transition: 'all 0.3s ease',
		},
		searchIcon: {
			position: 'absolute',
			left: '12px',
			top: '50%',
			transform: 'translateY(-50%)',
			color: darkMode ? '#888' : '#aaa',
		},
		grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
			gap: '24px',
		},
		card: {
			backgroundColor: darkMode ? '#2a2a2a' : '#fff',
			borderRadius: '12px',
			overflow: 'hidden',
			boxShadow: darkMode
				? '0 4px 16px rgba(0, 0, 0, 0.3)'
				: '0 4px 16px rgba(0, 0, 0, 0.1)',
			transition: 'transform 0.3s ease, box-shadow 0.3s ease',
			transform: 'translateY(0)',
		},
		cardHover: {
			transform: 'translateY(-6px)',
			boxShadow: darkMode
				? '0 6px 20px rgba(0, 0, 0, 0.4)'
				: '0 6px 20px rgba(0, 0, 0, 0.15)',
		},
		imageContainer: {
			position: 'relative',
			height: '200px',
			backgroundColor: darkMode ? '#333' : '#f0f0f0',
		},
		image: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			transition: 'transform 0.5s ease',
		},
		imageHover: {
			transform: 'scale(1.05)',
		},
		loadingSpinner: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '40px',
			height: '40px',
			border: '4px solid rgba(0, 0, 0, 0.1)',
			borderRadius: '50%',
			borderTop: darkMode ? '4px solid #e6e6e6' : '4px solid #333',
			animation: 'spin 1s linear infinite',
		},
		badge: {
			position: 'absolute',
			top: '12px',
			right: '12px',
			backgroundColor: 'rgba(0, 0, 0, 0.6)',
			color: '#fff',
			padding: '4px 8px',
			borderRadius: '4px',
			fontSize: '12px',
			fontWeight: 'bold',
		},
		cardContent: {
			padding: '20px',
		},
		cardHeader: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'flex-start',
			marginBottom: '12px',
		},
		restaurantName: {
			fontSize: '20px',
			fontWeight: 'bold',
			margin: '0 0 8px 0',
			color: darkMode ? '#e6e6e6' : '#333',
		},
		favoriteButton: {
			backgroundColor: 'transparent',
			border: 'none',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '4px',
			borderRadius: '50%',
			color: darkMode ? '#e6e6e6' : '#333',
		},
		ratingContainer: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '16px',
			color: '#f59e0b',
		},
		ratingText: {
			marginLeft: '8px',
			fontSize: '14px',
			color: darkMode ? '#aaa' : '#666',
		},
		infoRow: {
			display: 'flex',
			alignItems: 'center',
			marginBottom: '8px',
			color: darkMode ? '#aaa' : '#666',
			fontSize: '14px',
		},
		icon: {
			marginRight: '8px',
			flexShrink: 0,
		},
		websiteButton: {
			display: 'block',
			width: '100%',
			padding: '10px',
			marginTop: '16px',
			backgroundColor: 'transparent',
			border: darkMode ? '1px solid #555' : '1px solid #ddd',
			borderRadius: '8px',
			color: darkMode ? '#e6e6e6' : '#333',
			textAlign: 'center',
			textDecoration: 'none',
			fontSize: '14px',
			fontWeight: '500',
			cursor: 'pointer',
			transition: 'all 0.3s ease',
		},
		websiteButtonHover: {
			backgroundColor: darkMode ? '#333' : '#f0f0f0',
		},
		noResults: {
			textAlign: 'center',
			padding: '40px 0',
			color: darkMode ? '#aaa' : '#666',
		},
		// Custom toggle switch styles
		toggleSwitch: {
			width: '60px',
			height: '30px',
			borderRadius: '30px',
			cursor: 'pointer',
			position: 'relative',
			transition: 'background 0.3s ease',
			backgroundColor: darkMode ? '#0a193c' : '#fde68a',
		},
		toggleThumb: {
			width: '26px',
			height: '26px',
			borderRadius: '50%',
			position: 'absolute',
			top: '2px',
			left: darkMode ? '32px' : '2px',
			transition: 'left 0.3s ease, background-color 0.3s ease',
			backgroundColor: darkMode ? '#38bdf8' : '#07d6e97b',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: '60%',
			backgroundImage: darkMode
				? `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'><path d='M21 12.79A9 9 0 0111.21 3a9 9 0 109.79 9.79z'/></svg>")`
				: `url('https://cdn-icons-png.flaticon.com/512/869/869869.png')`,
		},
	}

	return (
		<div style={styles.app}>
			<style>
				{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          .dark {
            color-scheme: dark;
          }
        `}
			</style>
			<div style={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <CutleryIcon darkMode={darkMode} />
  <h1 style={{ fontSize: '28px', fontWeight: 700 }}>
    Top Restaurants in Tajikistan
  </h1>
</div>



				<div style={styles.searchContainer}>
					<div style={styles.searchIcon}>
						<SearchIcon />
					</div>
					<input
						type='text'
						placeholder='Search by name, location or cuisine...'
						style={styles.searchInput}
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</div>

				<div style={styles.grid}>
					{filteredRestaurants.map(restaurant => (
						<div
							key={restaurant.id}
							style={{
								...styles.card,
								...(hoveredCards[restaurant.id] ? styles.cardHover : {}),
							}}
							onMouseEnter={() => handleCardHover(restaurant.id, true)}
							onMouseLeave={() => handleCardHover(restaurant.id, false)}
						>
							<div style={styles.imageContainer}>
								{!loadedImages[restaurant.id] && (
									<div style={styles.loadingSpinner}></div>
								)}
								<img
									src={restaurant.image || '/placeholder.svg'}
									alt={restaurant.name}
									style={{
										...styles.image,
										...(hoveredCards[restaurant.id] ? styles.imageHover : {}),
										opacity: loadedImages[restaurant.id] ? 1 : 0,
									}}
									onLoad={() => handleImageLoad(restaurant.id)}
								/>
								<div style={styles.badge}>{restaurant.cuisine}</div>
							</div>

							<div style={styles.cardContent}>
								<div style={styles.cardHeader}>
									<h3 style={styles.restaurantName}>{restaurant.name}</h3>
									<button
										style={styles.favoriteButton}
										onClick={() => toggleFavorite(restaurant.id)}
										aria-label={
											favorites[restaurant.id]
												? 'Remove from favorites'
												: 'Add to favorites'
										}
									>
										<HeartIcon filled={favorites[restaurant.id]} />
									</button>
								</div>

								<div style={styles.ratingContainer}>
									{renderStars(restaurant.rating)}
									<span style={styles.ratingText}>({restaurant.rating})</span>
								</div>

								<div style={styles.infoRow}>
									<span style={styles.icon}>
										<MapPinIcon />
									</span>
									<span>{restaurant.location}</span>
								</div>

								<div style={styles.infoRow}>
									<span style={styles.icon}>
										<PhoneIcon />
									</span>
									<span>{restaurant.phone}</span>
								</div>

								<a
									href={restaurant.website}
									target='_blank'
									rel='noopener noreferrer'
									style={{
										...styles.websiteButton,
										...(hoveredButtons[restaurant.id]
											? styles.websiteButtonHover
											: {}),
									}}
									onMouseEnter={() => handleButtonHover(restaurant.id, true)}
									onMouseLeave={() => handleButtonHover(restaurant.id, false)}
								>
									<span style={styles.icon}>
										<GlobeIcon />
									</span>
									Visit Website
								</a>
							</div>
						</div>
					))}
				</div>

				{filteredRestaurants.length === 0 && (
					<div style={styles.noResults}>
						<p>No restaurants found matching your search.</p>
					</div>
				)}
			</div>
		</div>
	)
}
