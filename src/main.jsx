import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './componet/app/App'
import ProductProvider from './componet/hook/ProductProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
)
