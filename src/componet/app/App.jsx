import { Route, Routes } from 'react-router-dom'
import FloatingCartLink from '../cart/FloatingCartLink'
import './App.css'
import CartPage from '../../pages/CartPage'
import HomePage from '../../pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <FloatingCartLink />
    </>
  )
}

export default App
