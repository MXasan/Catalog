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

				<div className='container'>
					<Navbar />
					{cart.map(item => (
						<div className="productCartWrapper">
							<img src={item.image} alt={item.title} />
							<h1>{item.title}</h1>

							<button className='btn' onClick={removeFromCart}>remove</button>
						</div>

					))}
					<OrderButton />
				</div>
			</div>
		</>
	)
}

export default Cart
