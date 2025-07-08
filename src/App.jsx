import { useState, useEffect } from 'react'
import products from './products'
import './App.css'

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Dynamically get categories from products
  const categories = ["All Categories", ...new Set(products.map(product => product.category))]

  useEffect(() => {
    if (selectedCategory && selectedCategory !== "All Categories") {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    } else {
      setFilteredProducts(products)
    }
  }, [selectedCategory])

  return (
    <>
      <div className="container">
        <h1>Video Game Catalog</h1>
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category} 
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category || (!selectedCategory && category === "All Categories") ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="game-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="game-card">
              <img src={product.image} alt={product.name} className="game-image" />
              <h2 className="game-title">{product.name}</h2>
              <p className="game-description">{product.description}</p>
              <p className="game-price">${product.price.toFixed(2)}</p>
              <p className="game-category">Category: {product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
