import useProduct from '../../hook/useProduct'
import './card.css'
import Cards from './cards/cards'

const Card = () => {
    const { value } = useProduct()
    return (
        <>
            <h1 className='titleForPage'><span>OILAVI</span> MAXSULOT</h1>
            <div className='cardsWrapper container'>
                {value?.length > 0 ? (
                    value.map(item => (
                        < Cards product={item} key={item.id}/>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default Card
