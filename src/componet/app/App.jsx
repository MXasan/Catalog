import { useState, useEffect } from 'react'
import './App.css'
import Header from '../header/header'
import Card from '../cardwrapper/cardswrapper'
import Navbar from '../navbar/navbar'
import { Route, Routes } from 'react-router'
import Cart from '../cart/cart'

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Routes>
      <>
        <Route path="/" element={
          <div className="body">
            <div className="bgImage">
              <div className="bgLinerBlack">
                <div className="container">
                  <Navbar />
                  <Header />
                </div>
              </div>
            </div>
            <div className="container__Wapper">
              <Card product={product} />
            </div>
          </div>
        } />
        <Route path="*" element={
          <div className="body">
            <div className="container">
              <Navbar />
              <Cart />
            </div>
          </div>
        } />
      </>
    </Routes>
  )
}

export default App
