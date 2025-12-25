import './cards.css'
import QuantityButton from '../quantitybutton/quantitybutton'

const Cards = ({ product }) => {

  return (
    <>
      {
        < div className="maincard">
          <div className='cardImageWrapper'>
            <img src={product.image} alt={product.name} className='cardWrapper cardImage' loading='lazy' />
          </div>
          <div className="cardTitle">
            <div className="cardInfo">
              <h3>{product.title}</h3>
            </div>
            <div className="cardInfo">
              <p>{product.weight}</p>
              <p>{product.price}</p>
            </div>
            <div className='cardButton'>
              <QuantityButton product={product} />
            </div>
            <div className='cardDescription'>
              <p>{product.description}</p>
            </div>
          </div>
        </ div >
      }
    </>
  )
}

export default Cards
