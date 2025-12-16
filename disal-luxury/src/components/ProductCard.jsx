import '../App.css'

function ProductCard({ image, title, subtitle, metaLines = [], price, onViewDetails, ctaLabel }) {
  return (
    <article className="collection-card">
      <div
        className="collection-image"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      />
      <div className="collection-body">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {metaLines.length > 0 && (
          <div className="product-meta">
            {metaLines.map((line) => (
              <div key={line} className="product-meta-line">
                {line}
              </div>
            ))}
          </div>
        )}
        {price && <p className="product-price">{price}</p>}
        <button className="btn text" onClick={onViewDetails}>
          {ctaLabel || 'View Details'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard


