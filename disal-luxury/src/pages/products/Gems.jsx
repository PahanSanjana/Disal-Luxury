import '../../App.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GemProductCard from '../../components/GemProductCard'
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
              <GemProductCard
                key={gem.id}
                image={gem.image}
                name={gem.name}
                carat={gem.carat}
                color={gem.color}
                origin={gem.origin}
                certified={gem.certified}
                price={gem.price}
                onViewDetails={() => {
                  window.location.hash = `#gems/${gem.slug}`
                }}
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


