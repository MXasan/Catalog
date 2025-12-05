import QuantityButton from '../../componet/cardwrapper/quantitybutton/quantitybutton'
import Navbar from '../../componet/navbar/navbar'
import OrderButton from '../../componet/orderButton/orderButton'
import { useCart } from '../../hook/CartContext'
import './cart.css'

const Cart = () => {
	const { cart, removeFromCart } = useCart();
	// console.log(cart)

	return (
		<>
			<div className='body'>
				<div className='container containerCart'>
					<Navbar />
					<div className="cardsWrapperInCart">

						{cart.map(item => (
							<div className="productCartWrapper">
								<img src={item.image} alt={item.title} />
								<div className="cartInfoBtn">


									<div className="cartInfo">
										<h1>{item.title}</h1>
										<p>weight of: {item.weight}</p>
									</div>
									<div className="cartBtn">
										<button className='btn removeBtn' onClick={() => removeFromCart(item.id)}>remove</button>
										<div className="quantityBtnCart">
											<QuantityButton className="quantityBtnCart" product={item} />
										</div>
									</div>
								</div>

							</div>

						))}
					</div>
					<OrderButton />
				</div>
			</div>
		</>
	)
}

export default Cart
