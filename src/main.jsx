import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './componet/app/App'
import ProductProvider from './componet/hook/ProductProvider'
import Cart from './componet/cart/cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
)
