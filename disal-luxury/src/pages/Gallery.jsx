import { useEffect, useMemo, useState } from 'react'
import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryFilter from '../components/GalleryFilter'
import GalleryGrid from '../components/GalleryGrid'
import LightboxModal from '../components/LightboxModal'

const galleryItems = [
  {
    id: 'g1',
    category: 'Gems',
    title: 'Ceylon Blue Sapphire',
    description: 'Royal blue brilliance, ethically sourced in Ratnapura.',
    image:
      'https://images.unsplash.com/photo-1604177091072-b7b677a07975?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g2',
    category: 'Gems',
    title: 'Chrysoberyl Cat’s Eye',
    description: 'Distinct chatoyancy highlighted in a precision cabochon.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g3',
    category: 'Gems',
    title: 'Pigeon Blood Ruby',
    description: 'Fiery saturation paired with balanced clarity.',
    image:
      'https://images.unsplash.com/photo-1617032213042-09a504f215c9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'j1',
    category: 'Jewelry',
    title: 'Sapphire Halo Ring',
    description: 'Oval sapphire set in 18k white gold with pavé halo.',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'j2',
    category: 'Jewelry',
    title: 'Emerald Drop Necklace',
    description: 'Step-cut emerald on a delicate 18k yellow gold chain.',
    image:
      'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'j3',
    category: 'Jewelry',
    title: 'Diamond Line Bracelet',
    description: 'Handset diamonds in a classic, flexible line silhouette.',
    image:
      'https://images.unsplash.com/photo-1605106702734-205df224ecce?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c1',
    category: 'Custom Orders',
    title: 'Bespoke Engagement Ring',
    description: 'Client-designed sapphire engagement ring with hidden halo.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'c2',
    category: 'Custom Orders',
    title: 'Heritage Redesign',
    description: 'Legacy gems reset into a modern pendant for daily wear.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'w1',
    category: 'Certifications / Workshop',
    title: 'Certification Dossier',
    description: 'GIA and NGJA documents accompany every featured stone.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'w2',
    category: 'Certifications / Workshop',
    title: 'Bench Craft',
    description: 'Hand-setting under microscope for precision pavé.',
    image:
      'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80',
  },
]

function Gallery({ cartCount, onCartClick }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const selectedItem = lightboxIndex != null ? filteredItems[lightboxIndex] : null
  const hasPrev = lightboxIndex != null && lightboxIndex > 0
  const hasNext = lightboxIndex != null && lightboxIndex < filteredItems.length - 1

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex == null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight' && hasNext) setLightboxIndex((i) => i + 1)
      if (e.key === 'ArrowLeft' && hasPrev) setLightboxIndex((i) => i - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, hasNext, hasPrev])

  // Reset lightbox when filter changes
  useEffect(() => {
    setLightboxIndex(null)
  }, [activeCategory])

  return (
    <div className="page">
      <Header cartCount={cartCount} onCartClick={onCartClick} />
      <main>
        <section className="section">
          <div className="section-header">
            <p className="eyebrow">Gallery</p>
            <h2>Natural Ceylon gemstones and handcrafted jewelry</h2>
            <p className="subhead">
              A curated glimpse into our atelier—ethically sourced gems, bespoke creations, and the
              craft behind every piece.
            </p>
          </div>

          <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
          <GalleryGrid items={filteredItems} onSelect={setLightboxIndex} />
        </section>
      </main>

      <LightboxModal
        isOpen={lightboxIndex != null}
        item={selectedItem}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => hasPrev && setLightboxIndex((i) => i - 1)}
        onNext={() => hasNext && setLightboxIndex((i) => i + 1)}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
      <Footer />
    </div>
  )
}

export default Gallery


