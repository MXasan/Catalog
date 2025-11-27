import { useState, useEffect } from 'react'
import './App.css'
import Header from '../header/header'
import Card from '../cardwrapper/cardswrapper'
import Navbar from '../navbar/navbar'

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('/public/data.json')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }, [])

  // console.log(product);


  return (
    <>
      <div className="body">
        <div className="bgImage">
          <div className="bgLinerBlack">
            <div className="container">
              <Navbar />
              <Header />
            </div>
          </div>
        </div>
        <div className="container">
          <Card product={product} />
        </div>
      </div>

    </>

  )
}

export default App
