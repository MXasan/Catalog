import { ShoppingCart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const FloatingCartLink = () => {
  const { pathname } = useLocation()

  if (pathname === '/cart') {
    return null
  }

  return (
    <Link className='floatingCartLink' to='/cart' aria-label='Savat sahifasiga o‘tish'>
      <ShoppingCart size={28} strokeWidth={1.8} />
    </Link>
  )
}

export default FloatingCartLink

