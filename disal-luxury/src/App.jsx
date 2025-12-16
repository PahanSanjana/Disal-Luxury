import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'

const getPageFromHash = () => {
  if (typeof window === 'undefined') return 'home'
  return window.location.hash.replace('#', '') === 'about' ? 'about' : 'home'
}

function App() {
  const [page, setPage] = useState(getPageFromHash())

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page === 'about' ? <About /> : <Home />
}

export default App
