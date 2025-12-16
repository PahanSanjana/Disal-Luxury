import '../App.css'

function GemProductCard({ image, name, carat, color, origin, certified, price, onViewDetails }) {
  const badge = certified || origin

  return (
    <article className="product-card" onClick={onViewDetails} role="button" tabIndex={0}>
      <div className="product-media gem">
        <img src={image} alt={name} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{name}</h3>
        <p className="product-sub">{`${carat} • ${color}`}</p>
        {badge && <div className="product-badge">{badge}</div>}
        <p className="product-price">{price || 'Contact for Price'}</p>
        <button className="btn primary product-cta" onClick={(e) => { e.stopPropagation(); onViewDetails?.() }}>
          View Details
        </button>
      </div>
    </article>
  )
}

export default GemProductCard

