import { Route, Routes } from 'react-router-dom'
import Cart from '../../pages/cart/cart'
import Home from '../../pages/home'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> 
    </>
  )
}

export default App
