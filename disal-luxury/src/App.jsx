import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Gems from './pages/products/Gems'
import GemDetails from './pages/products/GemDetails'
import Jewelry from './pages/products/Jewelry'
import JewelryDetails from './pages/products/JewelryDetails'
import Checkout from './pages/Checkout'

const parseRoute = () => {
  if (typeof window === 'undefined') return { page: 'home' }
  const hash = window.location.hash.replace('#', '')
  if (!hash || hash === 'home') return { page: 'home' }

  const [segment, slug] = hash.split('/')

  if (segment === 'about') return { page: 'about' }
  if (segment === 'gems-page') return { page: 'gems' }
  if (segment === 'jewelry-page') return { page: 'jewelry' }
  if (segment === 'gems' && slug) return { page: 'gem-details', slug }
  if (segment === 'jewelry' && slug) return { page: 'jewelry-details', slug }
  if (segment === 'checkout') return { page: 'checkout' }

  return { page: 'home' }
}

function App() {
  const [route, setRoute] = useState(parseRoute)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem('cart') : null
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })
  const [checkoutItem, setCheckoutItem] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem('cart', JSON.stringify(cartItems))
    } catch {
      // ignore
    }
  }, [cartItems])

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  const addToCart = (product, quantity) => {
    setCheckoutItem(null)
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.type === product.type,
      )
      if (existingIndex === -1) {
        return [...prev, { ...product, quantity }]
      }
      const next = [...prev]
      next[existingIndex] = {
        ...next[existingIndex],
        quantity: (next[existingIndex].quantity || 1) + quantity,
      }
      return next
    })
  }

  const handleBuyNow = (product) => {
    setCheckoutItem(product)
    window.location.hash = '#checkout'
  }

  const handleCartClick = () => {
    setCheckoutItem(null)
    window.location.hash = '#checkout'
  }

  const sharedProps = {
    cartCount,
    onCartClick: handleCartClick,
  }

  switch (route.page) {
    case 'about':
      return <About {...sharedProps} />
    case 'gems':
      return <Gems {...sharedProps} />
    case 'gem-details':
      return (
        <GemDetails
          {...sharedProps}
          slug={route.slug}
          onAddToCart={addToCart}
          onBuyNow={handleBuyNow}
        />
      )
    case 'jewelry':
      return <Jewelry {...sharedProps} />
    case 'jewelry-details':
      return (
        <JewelryDetails
          {...sharedProps}
          slug={route.slug}
          onAddToCart={addToCart}
          onBuyNow={handleBuyNow}
        />
      )
    case 'checkout':
      return (
        <Checkout
          {...sharedProps}
          cartItems={cartItems}
          checkoutItem={checkoutItem}
        />
      )
    case 'home':
    default:
      return <Home {...sharedProps} />
  }
}

export default App
