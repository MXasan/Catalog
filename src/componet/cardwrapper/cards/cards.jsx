// products card component
const Cards = ({ product }) => {
  if (!Array.isArray(product)) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {product.map(item => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="cardImage" />
            <h3 className="cardTitle">{item.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Cards