import './cards.css'
import QuantityButton from '../quantitybutton/quantitybutton'
// products card component with tailwind css
const Cards = ({ key, product }) => {


  return (
    <div className="maincard" key={key}>
      <div className='cardImageWrapper'>
        <img src={product.image} alt={product.name} className='cardWrapper' loading='lazy' />
      </div>      <div className="cardTitle">
        <div className="cardInfo">
          <h3>{product.title}</h3>
          <p>{product.weight}</p>
        </div>
        <div className='cardButton'>
          <QuantityButton />
        </div>
        <div className='cardDescription'>
          <p>{product.description}</p>
        </div>
      </div>
    </ div>
  )
}

export default Cards
