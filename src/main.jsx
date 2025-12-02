import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './componet/app/App'
import ProductProvider from './componet/hook/ProductProvider'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './componet/hook/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  </StrictMode>
)
