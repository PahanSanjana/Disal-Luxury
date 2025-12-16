import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const gemTypes = [
  {
    title: 'Blue Sapphire',
    description: 'Velvety Ceylon blues with full certification and provenance.',
    image:
      'https://images.unsplash.com/photo-1604177091072-b7b677a07975?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Ruby',
    description: 'Fiery reds with balanced saturation and expertly cut facets.',
    image:
      'https://images.unsplash.com/photo-1617032213042-09a504f215c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cat’s Eye',
    description: 'Distinct chatoyancy sourced from Ratnapura’s famed mines.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Emerald',
    description: 'Lush greens with careful clarity selection and precision setting.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
]

const trustBadges = [
  'NGJA & GIA certified gemologists',
  'Sri Lanka origin with documented provenance',
  '50 years of family-run expertise',
  'Insured worldwide delivery & secure payments',
]

function Home({ cartCount, onCartClick }) {
  return (
    <div className="page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />

      <main id="home">
        <section className="hero hero-gem">
          <div className="hero-content">
            <p className="eyebrow">Thisla Gem Shop</p>
            <h1>
              Rare Sri Lankan gems
              <span> chosen for brilliance.</span>
            </h1>
            <p className="lede">
              First impressions matter. We pair heritage sourcing with meticulous cutting so every
              stone we present is vivid, verified, and ready to become your signature piece.
            </p>
            <div className="hero-actions">
              <button className="btn primary">View Gems</button>
              <button className="btn ghost">Contact Us</button>
            </div>
            <div className="highlight-bar">
              <div className="pill">Sri Lanka origin</div>
              <div className="pill">Certified & appraised</div>
              <div className="pill">Insured shipping</div>
            </div>
          </div>
          <div className="hero-visual hero-visual-gem">
            <div className="glass-card">
              <p className="glass-label">Featured Stone</p>
              <h3>Ceylon Blue Sapphire</h3>
              <p className="glass-copy">
                Royal blue hue, expertly cut for fire and depth. Accompanied by full provenance and
                certification.
              </p>
              <div className="stat-row">
                <div>
                  <p className="stat-number">3.2 ct</p>
                  <p className="stat-label">Carat weight</p>
                </div>
                <div>
                  <p className="stat-number">VVS</p>
                  <p className="stat-label">Clarity grade</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro">
          <div className="section-header">
            <p className="eyebrow">Our Promise</p>
            <h2>First impression meets lifelong trust</h2>
            <p className="subhead">
              We help you select the right stone—balancing color, clarity, cut, and provenance—so
              your piece feels as meaningful as the moment it marks.
            </p>
          </div>
        </section>

        <section id="gems" className="section">
          <div className="section-header">
            <p className="eyebrow">Key Gem Types</p>
            <h2>Signature stones we curate</h2>
            <p className="subhead">
              From royal sapphires to fiery rubies, each gem is hand-selected and certified for
              authenticity and brilliance.
            </p>
          </div>
          <div className="collection-grid">
            {gemTypes.map((item) => (
              <article className="collection-card" key={item.title}>
                <div
                  className="collection-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.title}
                />
                <div className="collection-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="btn text">View Availability</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="trust" className="section trust">
          <div className="section-header">
            <p className="eyebrow">Trust & Credentials</p>
            <h2>Why collectors choose us first</h2>
          </div>
          <div className="trust-grid">
            {trustBadges.map((item) => (
              <div className="trust-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Ready to view our gems?</h2>
            <p>
              Schedule a virtual or in-salon viewing. We’ll present certified stones that align with
              your style, budget, and occasion.
            </p>
            <div className="cta-actions">
              <button className="btn primary">View Gems</button>
              <button className="btn ghost">Contact Us</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home