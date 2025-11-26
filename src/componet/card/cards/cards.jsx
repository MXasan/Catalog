



const Cards = ({ product }) => {
    if (!Array.isArray(product)) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            {product.map(item => {
                return (
                    <h1 key={item.id}>{item.title}</h1>
                )
            })}
        </div>
    )
}

export default Cards