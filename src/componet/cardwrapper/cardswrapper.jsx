// cards main wrapper
import './card.css'
import Cards from './cards/cards'

const Card = ({ product }) => {
    return (
        <div className='cardsWrapper container' >
            {product.map(item => (
                <Cards key={item.id} product={item} />
            ))}
        </div>
    )
}

export default Card