import '../App.css'

function QuantitySelector({ value, min = 1, max = 10, onChange }) {
  const update = (next) => {
    if (!onChange) return
    const clamped = Math.min(max, Math.max(min, next))
    onChange(clamped)
  }

  return (
    <div className="quantity-selector" aria-label="Quantity selector">
      <button
        type="button"
        className="qty-btn"
        onClick={() => update(value - 1)}
        disabled={value <= min}
      >
        -
      </button>
      <div className="qty-value">{value}</div>
      <button
        type="button"
        className="qty-btn"
        onClick={() => update(value + 1)}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector


