import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="navbar__logo">M</div>
      <div className="navbar__links">
        <ul>
          <li>MAXSULOT</li>
          <li>ALOQA</li>
          <li>MALUMOT</li>
        </ul>
        <button>BUYURTMA</button>
      </div>
    </header>
  )
}

export default Navbar