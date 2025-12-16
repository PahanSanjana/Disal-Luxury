import '../App.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="brand">Disal Gem Shop</div>
          <p>
            Natural and certified Ceylon gemstones and handcrafted jewelry from Sri Lanka.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#gems-page">Gems</a>
              </li>
              <li>
                <a href="#jewelry-page">Jewelry</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li>
                <a href="#certification">Gem Certification</a>
              </li>
              <li>
                <a href="#custom-orders">Custom Orders</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#shipping-returns">Shipping &amp; Returns</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <span>21 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li>
                <a href="tel:+94112345678">+94 11 234 5678</a>
              </li>
              <li>
                <a href="https://wa.me/94772345678">WhatsApp: +94 77 234 5678</a>
              </li>
              <li>
                <a href="mailto:care@disalluxury.com">care@disalluxury.com</a>
              </li>
              <li>
                <span>Mon–Sat: 10:00 – 19:00 IST</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
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
              <a href="https://youtube.com" aria-label="YouTube" className="social-pill">
                YT
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Thisla Gem Shop. All rights reserved.</p>
        <p>Made in Sri Lanka 🇱🇰</p>
      </div>
    </footer>
  )
}

export default Footer


