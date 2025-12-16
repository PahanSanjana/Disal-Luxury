import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Checkout({ cartItems, checkoutItem, cartCount, onCartClick }) {
  const items = checkoutItem ? [checkoutItem] : cartItems

  return (
    <div className="page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Checkout</p>
            <h2>Review your selection</h2>
          </div>
          {items.length === 0 ? (
            <p className="subhead">Your cart is currently empty.</p>
          ) : (
            <div className="checkout-list">
              {items.map((item) => (
                <div key={`${item.type}-${item.id}`} className="checkout-item">
                  <div
                    className="checkout-thumb"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-label={item.name}
                  />
                  <div className="checkout-body">
                    <h3>{item.name}</h3>
                    <p className="glass-copy">
                      {item.type === 'gem'
                        ? `${item.details.carat} • ${item.details.color} • ${item.details.cut}`
                        : `${item.details.gemType} • ${item.details.metal}`}
                    </p>
                    <p className="product-price">{item.price}</p>
                    <p className="glass-copy">Quantity: {item.quantity || 1}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Checkout


