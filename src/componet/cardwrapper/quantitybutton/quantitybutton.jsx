import './quantitybutton.css'
export default function QuantityButton({ quantity,  }) {
	return (
		<div className="quantity">
			<button className="decrease BtnPlusMinus">-</button>
			<p>{quantity ? quantity : 0}</p>
			<button className="increase BtnPlusMinus">+</button>
		</div>
	)
}	