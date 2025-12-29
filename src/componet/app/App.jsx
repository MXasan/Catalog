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

      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste esse possimus maxime maiores quisquam quae, consequuntur, culpa ducimus tempora praesentium officia mollitia veritatis eaque perspiciatis amet et eligendi doloribus recusandae. Provident delectus deleniti aperiam, cumque adipisci officia! Blanditiis veritatis voluptatibus 
      laborum, ea atque rem asperiores nesciunt dolores corporis soluta 
      fugit ad, sunt et placeat. Quaerat 
      maxime, magnam accusantium porro ipsam, q
      uod, ducimus sed voluptatem quia sit volupt
      ate voluptatibus temporibus quibusdam nisi! 
       commodi neque nesciunt dignissimos ut beatae cupiditate quis et 
       debitis id asperiores sit sequi, fuga, perferendis saepe provident corrupti
        libero minima assumenda nobis doloremque illo necessitatibus quo? Id?
     </p > */}
    </>
  )
}

export default App
