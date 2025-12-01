import Navbar from '../componet/navbar/navbar'
import OrderButton from '../componet/orderButton/orderButton'

const Cart = () => {
	return (
		<div className='body'>
			<div className='container'>
				<Navbar />
				<h1>Cart Page</h1>
				<OrderButton />
			</div>
		</div>
	)
}

export default Cart
