import './quantitybutton.css'

import { useState } from 'react'

export default function QuantityButton() {
	const [addToCart, setAddToCart] = useState(false);
	const [quantity, setQuantity] = useState(0);

	function DecriseProduct() {
		setQuantity(quantity - 1)
		if (quantity <= 0) {
			setQuantity(0)
			setAddToCart(false)
		}
	}
	return (
		<>
			{
				addToCart ? (
					<div className="quantity">
						<button
							className="decrease BtnPlusMinus"
							onClick={() => DecriseProduct()}
						>-</button>
						<p>{quantity ? quantity : 1}</p>
						<button
							className="increase BtnPlusMinus"
							onClick={() => setQuantity(quantity + 1)}
						>+</button>
					</div>
				) :
					<button
						className='addToCart btn'
						onClick={() => setAddToCart(true)}
					>
						Add to Cart
					</button>
			}
		</>

	)
}	