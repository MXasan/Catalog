import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './componet/app/App'
import ProductProvider from './componet/hook/ProductProvider'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="" element={} /> */}
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
)
