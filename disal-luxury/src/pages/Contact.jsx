import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'

function Contact({ cartCount, onCartClick }) {
  return (
    <div className="page" id="contact">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Contact Us</p>
            <h2>Natural Ceylon gemstones & bespoke jewelry inquiries</h2>
            <p className="subhead">
              Speak with our gemologists or concierge for sourcing, custom design, or certification
              requests.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-panel">
              <h3>Visit or reach us</h3>
              <ContactInfo />
              <div className="social-row">
                <a href="https://instagram.com" aria-label="Instagram" className="social-pill">
                  IG
                </a>
                <a href="https://facebook.com" aria-label="Facebook" className="social-pill">
                  FB
                </a>
                <a href="https://wa.me/94772345678" aria-label="WhatsApp" className="social-pill">
                  WA
                </a>
              </div>
            </div>

            <div className="contact-form-panel">
              <h3>Send a message</h3>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Find Us</p>
            <h2>Our Colombo boutique</h2>
            <p className="subhead">Private appointments available upon request.</p>
          </div>
          <MapEmbed />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact


