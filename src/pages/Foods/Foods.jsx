"use client"

import { useState } from "react"

export default function Foods() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Main container styles
  const pageStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  }

  // Header styles
  const headerStyle = {
    textAlign: "center",
    marginBottom: "50px",
  }

  const titleStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: "16px",
  }

  const subtitleStyle = {
    fontSize: "18px",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
  }

  // Banner styles
  const bannerStyle = {
    width: "100%",
    height: "400px",
    backgroundImage:
      'url("https://paramountjourney.com/wp-content/uploads/2023/03/tajik-cuisine.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    marginBottom: "40px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const bannerOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  }

  const bannerContentStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center",
    padding: "0 20px",
  }

  const bannerTitleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  }

  const bannerDescriptionStyle = {
    fontSize: "20px",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
  }

  // Category navigation styles
  const categoryNavStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
    marginBottom: "40px",
  }

  const categoryButtonStyle = (category) => ({
    padding: "10px 20px",
    backgroundColor: activeCategory === category ? "#1e3a8a" : "#f3f4f6",
    color: activeCategory === category ? "white" : "#333",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: activeCategory === category ? "bold" : "normal",
    transition: "all 0.3s ease",
    fontSize: "16px",
  })

  // Food grid styles
  const foodGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  }

  // Food card styles
  const foodCardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  }

  const foodImageStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  }

  const foodContentStyle = {
    padding: "20px",
  }

  const foodTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1e3a8a",
  }

  const foodDescriptionStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.5",
  }

  const tagContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px",
  }

  const tagStyle = {
    padding: "4px 10px",
    backgroundColor: "#e5e7eb",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#4b5563",
  }

  const ingredientsStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "10px",
  }

  // Section styles
  const sectionStyle = {
    marginBottom: "60px",
  }

  const sectionTitleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: "20px",
    paddingBottom: "10px",
    borderBottom: "2px solid #e5e7eb",
  }

  const sectionContentStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#4b5563",
  }

  // Footer styles
  const footerStyle = {
    textAlign: "center",
    marginTop: "60px",
    paddingTop: "30px",
    borderTop: "1px solid #e5e7eb",
    color: "#6b7280",
    fontSize: "14px",
  }

  // Tajik food data
  const tajikFoods = [
    {
      id: 1,
      name: "Plov (Osh)",
      description: "The national dish of Tajikistan, a savory rice pilaf cooked with meat, carrots, and spices.",
      image:
        "https://traveltajikistan.tj/wp-content/uploads/2023/05/800x600c-center.jpg",
      category: "main",
      tags: ["Rice", "Festive", "Popular"],
      ingredients: "Rice, lamb or beef, carrots, onions, garlic, cumin, coriander, salt",
    },
    {
      id: 2,
      name: "Qurutob",
      description:
        "A traditional dish made with flatbread pieces soaked in a yogurt-based sauce with herbs and vegetables.",
      image: "https://adventuresoflilnicki.com/wp-content/uploads/2020/04/Kurutob-Olim-Dushanbe-Restaurants-Tajikistan.jpg",
      category: "main",
      tags: ["Dairy", "Vegetarian option", "Traditional"],
      ingredients: "Fatir (flatbread), qurut (dried yogurt), onions, herbs, vegetables, oil",
    },
    {
      id: 3,
      name: "Shashlik",
      description: "Skewered and grilled meat, typically lamb, marinated with spices and served with onions and herbs.",
      image: "https://asiaplustj.info/sites/default/files/articles/313499/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.jpg",
      category: "main",
      tags: ["Grilled", "Meat", "Street food"],
      ingredients: "Lamb or beef, onions, vinegar, salt, black pepper, cumin",
    },
    {
      id: 4,
      name: "Mantu",
      description: "Large steamed dumplings filled with seasoned meat and onions, topped with yogurt and tomato sauce.",
      image: "https://i.ytimg.com/vi/a4fV2Kw5W2E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzKcqZVEJTARg5qmrp0IVh5zIRfg",
      category: "main",
      tags: ["Dumplings", "Steamed", "Festive"],
      ingredients: "Flour, water, ground meat (lamb or beef), onions, spices, yogurt",
    },
    {
      id: 5,
      name: "Sambusa",
      description: "Triangular pastries filled with meat, onions, and spices, baked in a tandoor oven.",
      image: "https://adventuresoflilnicki.com/wp-content/uploads/2020/11/Uzbek-Samsa.jpg",
      category: "appetizer",
      tags: ["Pastry", "Baked", "Snack"],
      ingredients: "Flour, water, lamb or beef, onions, cumin, black pepper, salt",
    },
    {
      id: 6,
      name: "Non (Tajik Bread)",
      description: "Traditional round flatbread baked in a tandoor oven, often decorated with patterns.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Taj_Lepeshki.jpg/640px-Taj_Lepeshki.jpg",
      category: "bread",
      tags: ["Bread", "Staple", "Traditional"],
      ingredients: "Flour, water, yeast, salt, milk, sometimes sesame or nigella seeds",
    },
    {
      id: 7,
      name: "Shurbo",
      description: "A hearty soup made with meat, vegetables, and herbs, often served as a first course.",
      image: "https://trektajikistan.com/wp-content/uploads/2022/07/fatir-shurbo.jpg",
      category: "soup",
      tags: ["Soup", "Hearty", "Winter"],
      ingredients: "Lamb or beef, potatoes, carrots, onions, tomatoes, herbs, spices",
    },
    {
      id: 8,
      name: "Chakka",
      description: "A strained yogurt dish often served as a side or dip with herbs and spices.",
      image: "https://halva.tj/upload/resize_cache/webp/iblock/b2c/b2c2e97264fe010f09f4c1d3046f6866.webp",
      category: "appetizer",
      tags: ["Dairy", "Cold", "Side dish"],
      ingredients: "Yogurt, salt, herbs (dill, mint), garlic",
    },
    {
      id: 9,
      name: "Ugro",
      description: "A noodle soup with meat and vegetables, popular in the northern regions.",
      image: "https://trektajikistan.com/wp-content/uploads/2021/10/laghman.jpg",
      category: "soup",
      tags: ["Noodles", "Soup", "Comfort food"],
      ingredients: "Homemade noodles, meat (usually beef), onions, carrots, potatoes, herbs",
    },
  ]

  // Filter foods based on active category
  const filteredFoods =
    activeCategory === "all" ? tajikFoods : tajikFoods.filter((food) => food.category === activeCategory)

  return (
    <div style={pageStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Tajik National Cuisine</h1>
        <p style={subtitleStyle}>
          Explore the rich culinary traditions of Tajikistan, featuring unique flavors, fresh ingredients, and
          centuries-old recipes.
        </p>
      </header>

      {/* Banner */}
      <div style={bannerStyle}>
        <div style={bannerOverlayStyle}></div>
        <div style={bannerContentStyle}>
          <h2 style={bannerTitleStyle}>Discover Tajik Flavors</h2>
          <p style={bannerDescriptionStyle}>
            Tajik cuisine reflects the country's rich history, agricultural traditions, and cultural influences from
            Persia, Central Asia, and the Silk Road.
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div style={categoryNavStyle}>
        <button onClick={() => setActiveCategory("all")} style={categoryButtonStyle("all")}>
          All Foods
        </button>
        <button onClick={() => setActiveCategory("main")} style={categoryButtonStyle("main")}>
          Main Dishes
        </button>
        <button onClick={() => setActiveCategory("soup")} style={categoryButtonStyle("soup")}>
          Soups
        </button>
        <button onClick={() => setActiveCategory("appetizer")} style={categoryButtonStyle("appetizer")}>
          Appetizers
        </button>
        <button onClick={() => setActiveCategory("bread")} style={categoryButtonStyle("bread")}>
          Breads
        </button>
      </div>

      {/* Food Grid */}
      <div style={foodGridStyle}>
        {filteredFoods.map((food) => (
          <div key={food.id} style={{ ...foodCardStyle, transform: "scale(1)" }}>
            <img src={food.image || "/placeholder.svg"} alt={food.name} style={foodImageStyle} />
            <div style={foodContentStyle}>
              <h3 style={foodTitleStyle}>{food.name}</h3>
              <div style={tagContainerStyle}>
                {food.tags.map((tag, index) => (
                  <span key={index} style={tagStyle}>
                    {tag}
                  </span>
                ))}
              </div>
              <p style={foodDescriptionStyle}>{food.description}</p>
              <p style={ingredientsStyle}>
                <strong>Ingredients:</strong> {food.ingredients}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Culinary Traditions Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tajik Culinary Traditions</h2>
        <div style={sectionContentStyle}>
          <p>
            Tajik cuisine is deeply rooted in the country's agricultural heritage and nomadic past. The food traditions
            reflect the seasonal availability of ingredients and the need to preserve foods for harsh winters.
          </p>
          <p style={{ marginTop: "15px" }}>
            Hospitality is central to Tajik culture, and food plays a vital role in welcoming guests. A traditional
            Tajik meal often begins with tea and dried fruits, followed by appetizers, soups, and main dishes, with
            bread always present on the table.
          </p>
          <p style={{ marginTop: "15px" }}>
            Many Tajik dishes are cooked in a kazan (large cauldron) over an open fire or in a tandoor (clay oven),
            giving the food a distinctive flavor. Meals are typically served on a dastarkhan (tablecloth) with guests
            seated on the floor around the spread.
          </p>
        </div>
      </section>

      {/* Cooking Methods Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Traditional Cooking Methods</h2>
        <div style={sectionContentStyle}>
          <p>
            <strong>Tandoor Oven:</strong> A clay oven used for baking bread and cooking certain meat dishes. The high
            heat creates a unique texture and flavor.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>Kazan Cooking:</strong> Many dishes are prepared in a kazan, a large cast-iron cauldron that
            distributes heat evenly and allows for slow cooking of stews and rice dishes.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>Preservation Techniques:</strong> Traditional methods include drying (such as qurut, dried yogurt
            balls), pickling vegetables, and making jams from local fruits.
          </p>
          <p style={{ marginTop: "15px" }}>
            <strong>Steaming:</strong> Used for dishes like mantu (dumplings), where specialized multi-tiered steamers
            allow for cooking large quantities at once.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Tajik Cuisine Explorer | All images are representative</p>
        <p style={{ marginTop: "10px" }}>Discover the authentic flavors of Tajikistan</p>
      </footer>
    </div>
  )
}

