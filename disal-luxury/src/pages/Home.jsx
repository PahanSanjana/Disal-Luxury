import '../App.css'

const collections = [
  {
    title: 'Heirloom Diamonds',
    description: 'Brilliant-cut stones set in platinum for timeless radiance.',
    image:
      'https://images.unsplash.com/photo-1605106702734-205df224ecce?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sculpted Gold',
    description: 'Hand-forged 18k gold silhouettes with architectural lines.',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Opulent Pearls',
    description: 'South Sea pearls paired with modern halos and luminous pavé.',
    image:
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=900&q=80',
  },
]

const highlights = [
  'Certified conflict-free stones',
  'Bespoke design consultations',
  'White-glove worldwide delivery',
  'Lifetime care and resizing',
]

const testimonials = [
  {
    name: 'Ava M.',
    note: '“Exquisite craft and flawless service. My ring feels like art.”',
  },
  {
    name: 'Clara L.',
    note: '“They translated my story into a bespoke necklace I will cherish.”',
  },
  {
    name: 'J. Bennett',
    note: '“Museum-grade pieces with concierge-level attention to detail.”',
  },
]

function Home() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Disal Luxury</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#atelier">Atelier</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <button className="btn ghost">Book a Private Viewing</button>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Haute Joaillerie</p>
            <h1>
              Jewels crafted for
              <span> luminous moments.</span>
            </h1>
            <p className="lede">
              Discover heirloom-worthy creations sculpted by master artisans, set
              with ethically sourced gems and tailored to your story.
            </p>
            <div className="hero-actions">
              <button className="btn primary">Explore Signature Pieces</button>
              <button className="btn ghost">Design Your Own</button>
            </div>
            <div className="highlight-bar">
              {highlights.map((item) => (
                <div key={item} className="pill">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card">
              <p className="glass-label">Featured Couture</p>
              <h3>Lumière Necklace</h3>
              <p className="glass-copy">
                18k white gold, cascading pear-cut diamonds, hand-set in our Paris
                atelier.
              </p>
              <div className="stat-row">
                <div>
                  <p className="stat-number">112</p>
                  <p className="stat-label">Handset stones</p>
                </div>
                <div>
                  <p className="stat-number">4.6 ct</p>
                  <p className="stat-label">Total weight</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="section">
          <div className="section-header">
            <p className="eyebrow">Curated Collections</p>
            <h2>Sculpted brilliance, three ways</h2>
            <p className="subhead">
              Distinct signatures, each handcrafted to reveal the depth of rare gems and
              precious metals.
            </p>
          </div>
          <div className="collection-grid">
            {collections.map((item) => (
              <article className="collection-card" key={item.title}>
                <div
                  className="collection-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                  aria-label={item.title}
                />
                <div className="collection-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="btn text">View Lookbook</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="atelier" className="section split">
          <div className="copy">
            <p className="eyebrow">The Atelier</p>
            <h2>Where heritage meets innovation</h2>
            <p className="lede">
              Our master artisans fuse old-world techniques with contemporary forms,
              ensuring every facet, prong, and polish carries intention.
            </p>
            <ul className="list">
              <li>Private design salons in Paris, Milan, and Dubai</li>
              <li>In-house gemologists for bespoke sourcing</li>
              <li>3D visualization before the first cut</li>
              <li>Lifetime care, cleaning, and complimentary resizing</li>
            </ul>
            <div className="cta-row">
              <button className="btn primary">Schedule a Consultation</button>
              <button className="btn ghost">Meet the Designers</button>
            </div>
          </div>
          <div className="atelier-panel">
            <div className="badge">Maison 1974</div>
            <div className="atelier-card">
              <p className="glass-label">Signature Craft</p>
              <h3>Diamond Pavé Sculpture</h3>
              <p className="glass-copy">
                Each stone aligned by hand for seamless light flow and unrivaled fire.
              </p>
              <div className="stat-row compact">
                <div>
                  <p className="stat-number">72 hrs</p>
                  <p className="stat-label">Bench time</p>
                </div>
                <div>
                  <p className="stat-number">10 pt</p>
                  <p className="stat-label">Precision tolerance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="section testimonials">
          <div className="section-header">
            <p className="eyebrow">Collector Stories</p>
            <h2>Whispers from our patrons</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <blockquote className="testimonial" key={item.name}>
                <p>{item.note}</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Reserve a private viewing</h2>
            <p>
              Step into an intimate salon experience. Our concierge will curate pieces
              aligned to your occasion, style, and story.
            </p>
            <div className="cta-actions">
              <button className="btn primary">Book Now</button>
              <button className="btn ghost">View Boutique Locations</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand">Disal Luxury</div>
          <p>Fine jewels, crafted with reverence for light and legacy.</p>
        </div>
        <div className="footer-links">
          <a href="#">Boutiques</a>
          <a href="#">Press</a>
          <a href="#">Care & Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default Home

