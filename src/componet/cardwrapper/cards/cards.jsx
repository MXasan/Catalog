// products card component with tailwind css
const Cards = ({ key, product }) => {
  return (
    <div className="card" key={key}>
      <img src={product.image} alt={product.name} className="cardImage" />
      <h3 className="cardTitle">{product.title}</h3>
    </div>
  )
}

export default Cards