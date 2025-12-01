import './submitFormModal.css'

const SubmitFormModal = ({ onClose }) => {
	return (
		<div className='modalOverlay' onClick={onClose}>
			<div className='modalContent' onClick={e => e.stopPropagation()}>
				<button className='modalClose' onClick={onClose}>
					&times;
				</button>
				<h2>Buyurtma berish</h2>
				<form>
					<input type='text' placeholder='Ismingiz' />
					<input type='tel' placeholder='Telefon raqam' />
					<button type='submit'>Yuborish</button>
				</form>
			</div>
		</div>
	)
}

export default SubmitFormModal
