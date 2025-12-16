import '../App.css'
import CartButton from './CartButton'

function Header({ cartCount = 0, onCartClick }) {
  return (
    <header className="nav">
      <div className="brand">Disal Luxury</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#gems-page">Gems</a>
        <a href="#jewelry-page">Jewelry</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a className="btn ghost" href="#contact">
          Contact Us
        </a>
        <CartButton count={cartCount} onClick={onCartClick} />
      </nav>
    </header>
  )
}

export default Header

