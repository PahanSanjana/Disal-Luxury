import '../App.css'

function CartButton({ count = 0, onClick }) {
  return (
    <button
      type="button"
      className="cart-button"
      onClick={onClick}
      aria-label={`Cart with ${count} item${count === 1 ? '' : 's'}`}
    >
      <span className="cart-icon" aria-hidden="true">
        ⬤
      </span>
      {count > 0 && <span className="cart-count">{count}</span>}
    </button>
  )
}

export default CartButton


