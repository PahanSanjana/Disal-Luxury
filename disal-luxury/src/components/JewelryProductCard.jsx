import '../App.css'

function JewelryProductCard({ image, name, gemType, metal, price, onViewDetails }) {
  return (
    <article className="product-card" onClick={onViewDetails} role="button" tabIndex={0}>
      <div className="product-media jewelry">
        <img src={image} alt={name} />
      </div>
      <div className="product-body">
        <h3 className="product-title">{name}</h3>
        <p className="product-sub">{gemType}</p>
        <p className="product-sub">{metal}</p>
        <p className="product-price">{price}</p>
        <button className="btn primary product-cta" onClick={(e) => { e.stopPropagation(); onViewDetails?.() }}>
          View Details
        </button>
      </div>
    </article>
  )
}

export default JewelryProductCard

