import './quantitybutton.css'
export default function QuantityButton({ quantity, setQuantity }) {
	return (
		<div className="quantity">
			<button className="decrease BtnPlusMinus">-</button>
			{/* <input type="number" className="quantity-input" value={quantity} readOnly /> */}
			<p>{quantity ? quantity : 0}</p>
			<button className="increase BtnPlusMinus" onClick={setQuantity()}>+</button>
		</div>
	)
}	