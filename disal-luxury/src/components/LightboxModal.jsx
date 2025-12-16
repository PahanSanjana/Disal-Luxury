import '../App.css'

function LightboxModal({ isOpen, item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  if (!isOpen || !item) return null

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      {hasPrev && (
        <button className="lightbox-nav prev" onClick={onPrev} aria-label="Previous image">
          ‹
        </button>
      )}
      {hasNext && (
        <button className="lightbox-nav next" onClick={onNext} aria-label="Next image">
          ›
        </button>
      )}
      <div className="lightbox-content">
        <img src={item.image} alt={item.title} className="lightbox-image" />
        <div className="lightbox-caption">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default LightboxModal


