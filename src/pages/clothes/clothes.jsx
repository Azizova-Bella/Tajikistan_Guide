function Clothes() {
	const clothesData = [
	  {
		 id: 1,
		 name: "Chapan",
		 image: "https://example.com/chapan.jpg", // Replace with actual image
		 description: "Traditional robe worn by men, often made of striped silk or velvet with intricate embroidery.",
		 regions: "Throughout Tajikistan",
		 occasion: "Weddings, celebrations, formal events"
	  },
	  {
		 id: 2,
		 name: "Kurta",
		 image: "https://example.com/kurta.jpg", // Replace with actual image
		 description: "Long tunic dress worn by women, typically with colorful patterns and embroidery.",
		 regions: "All regions, especially Pamir",
		 occasion: "Daily wear, festivals"
	  },
	  {
		 id: 3,
		 name: "Taqiyah",
		 image: "https://example.com/taqiyah.jpg", // Replace with actual image
		 description: "Embroidered skullcap worn by men, often with traditional patterns.",
		 regions: "Throughout Tajikistan",
		 occasion: "Daily wear, religious events"
	  },
	  {
		 id: 4,
		 name: "Rumol",
		 image: "https://example.com/rumol.jpg", // Replace with actual image
		 description: "Traditional headscarf worn by women with distinctive regional patterns.",
		 regions: "Khatlon, Sughd regions",
		 occasion: "Daily wear, ceremonies"
	  }
	];
 
	return (
	  <div style={{
		 maxWidth: '1200px',
		 margin: '0 auto',
		 padding: '20px',
		 fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		 backgroundColor: '#f9f5f0'
	  }}>
		 <header style={{
			textAlign: 'center',
			marginBottom: '40px',
			padding: '20px 0',
			borderBottom: '2px solid #d4a373'
		 }}>
			<h1 style={{
			  color: '#3a5a40',
			  fontSize: '2.5rem',
			  marginBottom: '10px'
			}}>Tajik National Clothing</h1>
			<p style={{
			  color: '#6c757d',
			  fontSize: '1.1rem',
			  maxWidth: '800px',
			  margin: '0 auto',
			  lineHeight: '1.6'
			}}>
			  Discover the rich textile heritage of Tajikistan through its vibrant traditional clothing,
			  each piece telling a story of culture, region, and craftsmanship.
			</p>
		 </header>
 
		 <main>
			<section style={{
			  display: 'grid',
			  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
			  gap: '30px',
			  marginBottom: '50px'
			}}>
			  {clothesData.map(item => (
				 <div key={item.id} style={{
					backgroundColor: 'white',
					borderRadius: '10px',
					overflow: 'hidden',
					boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
					transition: 'transform 0.3s ease',
					':hover': {
					  transform: 'translateY(-5px)'
					}
				 }}>
					<div style={{
					  height: '250px',
					  backgroundColor: '#e9ecef',
					  backgroundImage: `url(${item.image})`,
					  backgroundSize: 'cover',
					  backgroundPosition: 'center'
					}}></div>
					<div style={{ padding: '20px' }}>
					  <h2 style={{
						 color: '#3a5a40',
						 marginBottom: '10px',
						 fontSize: '1.5rem'
					  }}>{item.name}</h2>
					  <p style={{
						 color: '#6c757d',
						 marginBottom: '15px',
						 lineHeight: '1.5'
					  }}>{item.description}</p>
					  <div style={{ marginBottom: '15px' }}>
						 <p style={{ margin: '5px 0', color: '#495057' }}>
							<strong style={{ color: '#3a5a40' }}>Regions:</strong> {item.regions}
						 </p>
						 <p style={{ margin: '5px 0', color: '#495057' }}>
							<strong style={{ color: '#3a5a40' }}>Occasion:</strong> {item.occasion}
						 </p>
					  </div>
					</div>
				 </div>
			  ))}
			</section>
 
			<section style={{
			  backgroundColor: '#d4a373',
			  padding: '30px',
			  borderRadius: '10px',
			  marginBottom: '40px',
			  color: 'white'
			}}>
			  <h2 style={{
				 fontSize: '1.8rem',
				 marginBottom: '20px',
				 textAlign: 'center'
			  }}>Cultural Significance</h2>
			  <div style={{
				 display: 'grid',
				 gridTemplateColumns: '1fr 1fr',
				 gap: '20px',
				 '@media (max-width: 768px)': {
					gridTemplateColumns: '1fr'
				 }
			  }}>
				 <div>
					<h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Symbolism</h3>
					<p style={{ lineHeight: '1.6' }}>
					  Tajik clothing patterns often represent natural elements like mountains, rivers, 
					  and flowers, reflecting the country's stunning landscapes. Colors carry meaning 
					  too - red symbolizes happiness, white represents purity, and green stands for nature.
					</p>
				 </div>
				 <div>
					<h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Craftsmanship</h3>
					<p style={{ lineHeight: '1.6' }}>
					  Traditional Tajik textiles are handwoven using techniques passed down through 
					  generations. The intricate embroidery, called "gulduzi," is particularly 
					  prized and can take months to complete for a single garment.
					</p>
				 </div>
			  </div>
			</section>
 
			<section style={{ textAlign: 'center', padding: '30px 0' }}>
			  <h2 style={{
				 color: '#3a5a40',
				 fontSize: '1.8rem',
				 marginBottom: '20px'
			  }}>Experience Tajik Textiles</h2>
			  <p style={{
				 maxWidth: '700px',
				 margin: '0 auto 30px',
				 lineHeight: '1.6',
				 color: '#6c757d'
			  }}>
				 Visit local markets in Dushanbe, Khujand, or Penjikent to see these beautiful
				 garments being made and sold. Many artisans welcome visitors to observe their craft.
			  </p>
			  <button style={{
				 backgroundColor: '#3a5a40',
				 color: 'white',
				 border: 'none',
				 padding: '12px 25px',
				 borderRadius: '30px',
				 fontSize: '1rem',
				 cursor: 'pointer',
				 transition: 'background-color 0.3s',
				 ':hover': {
					backgroundColor: '#588157'
				 }
			  }}>
				 Discover Textile Tours
			  </button>
			</section>
		 </main>
 
		 <footer style={{
			textAlign: 'center',
			padding: '20px',
			borderTop: '1px solid #ddd',
			color: '#6c757d',
			fontSize: '0.9rem'
		 }}>
			<p>© {new Date().getFullYear()} Tajik Cultural Heritage. All rights reserved.</p>
		 </footer>
	  </div>
	);
 }
 
 export default Clothes;