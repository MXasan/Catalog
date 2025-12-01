import { useState } from 'react'
import "./cards.css"
import QuantityButton from '../quantitybutton/quantitybutton'

// products card component with tailwind css
const Cards = ({ key, product }) => {
  const [addToCart, setAddToCart] = useState(false)
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="maincard" key={key}>  
      <div className='cardImageWrapper'>
        <img src={product.image} alt={product.name} className='cardWrapper' />
      </div>      <div className="cardTitle">
        <div className="cardInfo">
          <h3>{product.title}</h3>
          <p>{product.weight}</p>
        </div>
        <div className="cardButton">
          {
            addToCart ? (
              <QuantityButton onClick={() =>
                setAddToCart(false)} quantity={quantity} setQuantity={setQuantity} />
            ) : (
              <button className="addToCart btn" onClick={() =>
                setAddToCart(true)}>Add to Cart</button>
            )
          }
        </div>
        <div className="cardDescription">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards