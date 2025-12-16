import '../App.css'

function GalleryGrid({ items = [], onSelect }) {
  return (
    <div className="gallery-grid">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="gallery-card"
          onClick={() => onSelect?.(idx)}
          role="button"
          tabIndex={0}
        >
          <div className="gallery-image">
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>
          <div className="gallery-meta">
            <p className="gallery-title">{item.title}</p>
            <p className="gallery-sub">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid


