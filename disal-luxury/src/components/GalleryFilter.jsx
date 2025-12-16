import '../App.css'

const categories = ['All', 'Gems', 'Jewelry', 'Custom Orders', 'Certifications / Workshop']

function GalleryFilter({ active, onChange }) {
  return (
    <div className="gallery-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`gallery-filter-btn ${active === cat ? 'active' : ''}`}
          onClick={() => onChange?.(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default GalleryFilter


