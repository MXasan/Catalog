import './quantitybutton.css'
import { useCart } from '../../../hook/CartContext';

export default function QuantityButton({ product }) {

	const { cart, addToCart, decreaseQuantity } = useCart();

	// Находим этот товар в корзине (если он уже добавлен)
	const cartItem = cart.find(item => item.id === product.id);
	const quantity = cartItem?.quantity || 0;

	return (
		<>
			{quantity > 0 ? (
				<div className="quantity">
					<button
						className="decrease BtnPlusMinus"
						onClick={() => decreaseQuantity(product.id)}
					>
						-
					</button>

					<p>{quantity}</p>

					<button
						className="increase BtnPlusMinus"
						onClick={() => addToCart(product)}
					>
						+
					</button>
				</div>
			) : (
				<button
					className='addToCart btn'
					onClick={() => addToCart(product)}
				>
					Add to Cart
				</button>
			)}
		</>
	);
}
