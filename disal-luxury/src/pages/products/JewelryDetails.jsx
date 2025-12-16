import React, { useState } from 'react'
import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import QuantitySelector from '../../components/QuantitySelector'
import { jewelry } from '../../data/jewelry'

function JewelryDetails({ slug, cartCount, onCartClick, onAddToCart, onBuyNow }) {
  const item = jewelry.find((j) => j.slug === slug) || jewelry[0]
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (!onAddToCart) return
    onAddToCart(
      {
        id: item.id,
        type: 'jewelry',
        name: item.name,
        price: item.price,
        image: item.image,
        details: {
          gemType: item.gemType,
          metal: item.metal,
          weight: item.weight,
          sizeOptions: item.sizeOptions,
        },
      },
      quantity,
    )
  }

  const handleBuyNow = () => {
    if (!onBuyNow) return
    onBuyNow({
      id: item.id,
      type: 'jewelry',
      name: item.name,
      price: item.price,
      image: item.image,
      details: {
        gemType: item.gemType,
        metal: item.metal,
        weight: item.weight,
        sizeOptions: item.sizeOptions,
      },
      quantity,
    })
  }

  return (
    <div className="page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="split">
            <div className="hero-visual">
              <div className="glass-card">
                <p className="glass-label">Jewelry Gallery</p>
                <h3>{item.name}</h3>
                <p className="glass-copy">
                  {item.gemType} • {item.metal}
                </p>
              </div>
            </div>
            <div className="copy">
              <p className="eyebrow">Jewelry Details</p>
              <h2>{item.name}</h2>
              <div className="product-meta-grid">
                <div>
                  <p className="glass-label">Gem type</p>
                  <p className="glass-copy">{item.gemType}</p>
                </div>
                <div>
                  <p className="glass-label">Metal</p>
                  <p className="glass-copy">{item.metal}</p>
                </div>
                <div>
                  <p className="glass-label">Weight</p>
                  <p className="glass-copy">{item.weight}</p>
                </div>
                <div>
                  <p className="glass-label">Size options</p>
                  <p className="glass-copy">{item.sizeOptions.join(', ')}</p>
                </div>
                <div>
                  <p className="glass-label">Price</p>
                  <p className="glass-copy">{item.price}</p>
                </div>
              </div>
              <div className="purchase-row">
                <QuantitySelector value={quantity} onChange={setQuantity} />
                <button className="btn primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn ghost" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default JewelryDetails


