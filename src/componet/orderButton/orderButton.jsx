import { useState } from 'react'
import SubmitFormModal from '../submitFormModal/submitFormModal'
import './orderButton.css'

const OrderButton = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className='orderButtonWrapper'>
				<button className='orderButton' onClick={() => setIsOpen(true)}>
					Buyurtma
				</button>
			</div>
			{isOpen && <SubmitFormModal onClose={() => setIsOpen(false)} />}
		</>
	)
}

export default OrderButton
