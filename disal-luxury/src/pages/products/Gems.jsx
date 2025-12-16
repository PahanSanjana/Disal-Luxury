import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import { gems } from '../../data/gems'

function Gems({ cartCount, onCartClick }) {
  return (
    <div className="page" id="gems-page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Gems</p>
            <h2>Curated Sri Lankan gemstones</h2>
            <p className="subhead">
              Explore a selection of certified Ceylon stones, each chosen for its color, clarity,
              and character.
            </p>
          </div>
          <div className="collection-grid">
            {gems.map((gem) => (
              <ProductCard
                key={gem.id}
                image={gem.image}
                title={gem.name}
                subtitle={`${gem.carat} • ${gem.color}`}
                metaLines={[gem.origin, gem.certified]}
                price={gem.price}
                onViewDetails={() => {
                  window.location.hash = `#gems/${gem.slug}`
                }}
                ctaLabel="View Details"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Gems


