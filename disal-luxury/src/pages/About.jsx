import '../App.css'
import './About.css'

const highlights = [
  { label: 'Founded', value: '1974', note: 'Family atelier in Colombo' },
  { label: 'Clients served', value: '18k+', note: 'Across 32 countries' },
  { label: 'Gemologists', value: '8', note: 'GIA & NGJA certified' },
  { label: 'Craft hours', value: '120+', note: 'Average per bespoke piece' },
]

const timeline = [
  {
    year: '1974',
    title: 'The first boutique',
    copy:
      'Opened on Galle Road, bringing Sri Lankan sapphires and Ceylon stones to local collectors.',
  },
  {
    year: '1990s',
    title: 'Second generation',
    copy:
      'Dilani Perera joins the atelier, formalizing gemological certifications and global sourcing.',
  },
  {
    year: '2008',
    title: 'International salons',
    copy:
      'Private viewings launched in Milan and Dubai, offering bespoke design consultations.',
  },
  {
    year: 'Today',
    title: 'Heritage with innovation',
    copy:
      'Modern fabrication, 3D visualization, and lifetime care while keeping hand-set artistry.',
  },
]

const sourcing = [
  {
    title: 'Ethical Sri Lankan mines',
    copy: 'Audited partners in Ratnapura with fair-wage practices and eco-first protocols.',
  },
  {
    title: 'Full provenance',
    copy: 'Each stone is traced from mine to masterpiece with documented chain of custody.',
  },
  {
    title: 'Responsible cutting',
    copy: 'Local cutters trained to minimize loss and maximize brilliance with humane hours.',
  },
]

const values = [
  {
    title: 'Integrity',
    copy: 'Transparent documentation, insured shipping, and authentic certification on every jewel.',
  },
  {
    title: 'Craft',
    copy: 'Bench-made settings, handset pavé, and microscopic inspections at every milestone.',
  },
  {
    title: 'Care',
    copy: 'Lifetime cleaning, prong checks, and complimentary resizing for the perfect fit.',
  },
  {
    title: 'Sustainability',
    copy: 'Recycled metals when possible and partnerships that protect local environments.',
  },
]

const team = [
  {
    name: 'Dilani Perera',
    role: 'Creative Director & Gemologist',
    photo:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    note: 'Second-generation steward guiding design, provenance, and client storytelling.',
  },
  {
    name: 'Colombo Flagship',
    role: 'Heritage Boutique',
    photo:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80',
    note: 'Our original salon, still welcoming collectors for private fittings and unveilings.',
  },
]

function About() {
  return (
    <div className="about-page" id="about">
      <header className="nav">
        <div className="brand">Disal Luxury</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#home">Collections</a>
          <a href="#home">Atelier</a>
          <button className="btn ghost">Book a Private Viewing</button>
        </nav>
      </header>

      <header className="about-hero">
        <div className="hero-copy">
          <p className="eyebrow">About Us</p>
          <h1>Trust, heritage, and luminous craft.</h1>
          <p className="lede">
            For five decades, Disal Luxury has paired Sri Lanka’s finest gems with master
            craftsmanship. Every piece is documented, hand-finished, and cared for for life.
          </p>
          <div className="hero-pills">
            <div className="pill">Conflict-free sourcing</div>
            <div className="pill">Insured worldwide delivery</div>
            <div className="pill">Lifetime service</div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-header">Trusted since 1974</div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.label}>
                <p className="highlight-value">{item.value}</p>
                <p className="highlight-label">{item.label}</p>
                <p className="highlight-note">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="assurance">
            <p className="glass-label">Assurance</p>
            <p className="glass-copy">
              GIA and NGJA certifications, independent appraisals, and sealed provenance docs
              accompany every jewel.
            </p>
          </div>
        </div>
      </header>

      <section className="section history">
        <div className="section-header">
          <p className="eyebrow">Heritage</p>
          <h2>Our story through the years</h2>
          <p className="subhead">
            From a single boutique on Galle Road to international salons, our devotion to
            light, color, and trust has never wavered.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-card" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience">
        <div className="split">
          <div className="copy">
            <p className="eyebrow">Experience</p>
            <h2>Five decades in the gem world</h2>
            <p className="lede">
              Our in-house gemologists and setters collaborate to preserve the character of each
              stone—balancing brilliance, color, and longevity.
            </p>
            <ul className="list">
              <li>Bench-made settings with microscope inspections at every stage.</li>
              <li>Curated sapphires, rubies, emeralds, and diamonds with full documentation.</li>
              <li>3D visualization before cutting to protect carat weight and symmetry.</li>
              <li>Dedicated concierge for insured, white-glove delivery worldwide.</li>
            </ul>
          </div>
          <div className="experience-panel">
            <div className="badge">Colombo Atelier</div>
            <div className="panel-body">
              <p className="glass-label">Craft you can feel</p>
              <p className="glass-copy">
                Every prong, pavé line, and polish is executed by master artisans with decades at
                the bench.
              </p>
              <div className="stat-row compact">
                <div>
                  <p className="stat-number">30 yrs</p>
                  <p className="stat-label">Average bench experience</p>
                </div>
                <div>
                  <p className="stat-number">0.1 mm</p>
                  <p className="stat-label">Tolerance per setting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sourcing">
        <div className="section-header">
          <p className="eyebrow">Ethical Sourcing</p>
          <h2>Rooted in Sri Lanka, accountable to the world</h2>
          <p className="subhead">
            We partner directly with Sri Lankan mines to ensure fair wages, safer conditions, and
            responsible stewardship of the land.
          </p>
        </div>
        <div className="sourcing-grid">
          {sourcing.map((item) => (
            <div className="sourcing-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
          <div className="sourcing-card photo">
            <img
              src="https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=900&q=80"
              alt="Gem mining landscape in Sri Lanka"
            />
            <p className="caption">Responsible partnerships across Ratnapura’s gem-rich terrain.</p>
          </div>
        </div>
      </section>

      <section className="section values">
        <div className="section-header">
          <p className="eyebrow">Mission & Values</p>
          <h2>How we earn your trust</h2>
        </div>
        <div className="value-grid">
          {values.map((item) => (
            <div className="value-card" key={item.title}>
              <p className="glass-label">{item.title}</p>
              <p className="glass-copy">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section team">
        <div className="section-header">
          <p className="eyebrow">People & Place</p>
          <h2>Faces and spaces behind Disal Luxury</h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <div className="team-card" key={person.name}>
              <img src={person.photo} alt={person.name} />
              <div className="team-body">
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <p>{person.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Visit our Colombo flagship or book a private salon</h2>
          <p>
            Meet our gemologists, review stones with provenance documents, and design a piece that
            honors your story.
          </p>
          <div className="cta-actions">
            <button className="btn primary">Book a Private Viewing</button>
            <button className="btn ghost">Speak with a Gemologist</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

