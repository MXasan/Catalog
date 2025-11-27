// cards main wrapper
import './card.css'
import Cards from './cards/cards'

const Card = ({ product }) => {
    console.log(product)

    return (
        <>
            <Cards product={product} />
        </>
    )
}

export default Card