import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import JewelryProductCard from '../../components/JewelryProductCard'
import { jewelry } from '../../data/jewelry'

const categories = ['Rings', 'Necklaces', 'Bracelets', 'Earrings']

function Jewelry({ cartCount, onCartClick }) {
  return (
    <div className="page" id="jewelry-page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Jewelry</p>
            <h2>Fine jewelry, crafted around each stone</h2>
            <p className="subhead">
              Discover rings, necklaces, bracelets, and earrings that showcase Sri Lankan gems in
              refined, modern silhouettes.
            </p>
          </div>

          {categories.map((category) => {
            const items = jewelry.filter((item) => item.category === category)
            if (!items.length) return null
            return (
              <div className="section" key={category}>
                <h3>{category}</h3>
                <div className="collection-grid">
                  {items.map((item) => (
                    <JewelryProductCard
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      gemType={item.gemType}
                      metal={item.metal}
                      price={item.price}
                      onViewDetails={() => {
                        window.location.hash = `#jewelry/${item.slug}`
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Jewelry


