import './quantitybutton.css'
export default function QuantityButton({quantity, setQuantity}) {
	return (
		<div className="quantity">
			<button className="decrease">-</button>
			<input type="number" className="quantity-input" value={quantity} readOnly />
			<button className="increase" onClick={setQuantity()}>+</button>
		</div>
	)
}	