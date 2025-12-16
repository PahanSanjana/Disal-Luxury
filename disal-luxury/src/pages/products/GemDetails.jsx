import React, { useState } from 'react'
import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import QuantitySelector from '../../components/QuantitySelector'
import { gems } from '../../data/gems'

function GemDetails({ slug, cartCount, onCartClick, onAddToCart, onBuyNow }) {
  const gem = gems.find((g) => g.slug === slug) || gems[0]
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (!onAddToCart) return
    onAddToCart({
      id: gem.id,
      type: 'gem',
      name: gem.name,
      price: gem.price,
      image: gem.image,
      details: {
        carat: gem.carat,
        color: gem.color,
        cut: gem.cut,
        origin: gem.origin,
        certified: gem.certified,
      },
    }, quantity)
  }

  const handleBuyNow = () => {
    if (!onBuyNow) return
    onBuyNow({
      id: gem.id,
      type: 'gem',
      name: gem.name,
      price: gem.price,
      image: gem.image,
      details: {
        carat: gem.carat,
        color: gem.color,
        cut: gem.cut,
        origin: gem.origin,
        certified: gem.certified,
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
            <div className="hero-visual hero-visual-gem">
              <div className="glass-card">
                <p className="glass-label">Gem Gallery</p>
                <h3>{gem.name}</h3>
                <p className="glass-copy">
                  {gem.carat} • {gem.color} • {gem.cut}
                </p>
              </div>
            </div>
            <div className="copy">
              <p className="eyebrow">Gem Details</p>
              <h2>{gem.name}</h2>
              <div className="product-meta-grid">
                <div>
                  <p className="glass-label">Carat weight</p>
                  <p className="glass-copy">{gem.carat}</p>
                </div>
                <div>
                  <p className="glass-label">Color</p>
                  <p className="glass-copy">{gem.color}</p>
                </div>
                <div>
                  <p className="glass-label">Cut</p>
                  <p className="glass-copy">{gem.cut}</p>
                </div>
                <div>
                  <p className="glass-label">Origin</p>
                  <p className="glass-copy">{gem.origin}</p>
                </div>
                <div>
                  <p className="glass-label">Certification</p>
                  <p className="glass-copy">{gem.certified}</p>
                </div>
                <div>
                  <p className="glass-label">Price</p>
                  <p className="glass-copy">{gem.price}</p>
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

export default GemDetails


