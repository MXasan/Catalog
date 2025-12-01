import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../../pages/home'
import Cart from '../../pages/cart'

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home product={product} />} />
      <Route path="/cart" element={<Cart />} />
    
    </Routes>
    </>
  )
}

export default App
