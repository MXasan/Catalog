import { useState } from 'react'
import { useCart } from '../../hook/CartContext'
import './submitFormModal.css'

const SubmitFormModal = ({ onClose }) => {
	const { cart, clearCart } = useCart()

	// Get current date and time for default value
	const now = new Date()
	now.setMinutes(now.getMinutes() - now.getTimezoneOffset()) // Adjust for timezone
	const defaultDateTime = now.toISOString().slice(0, 16)

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phoneNumber: '',
		address: '',
		deliveryDateTime: defaultDateTime,
		additionalNotes: '',
	})

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setError('') // Clear error when user types
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		setLoading(true)

		// Validation
		if (
			!formData.firstName.trim() ||
			!formData.lastName.trim() ||
			!formData.phoneNumber.trim() ||
			!formData.address.trim() ||
			!formData.deliveryDateTime
		) {
			setError("Iltimos, barcha majburiy maydonlarni to'ldiring")
			setLoading(false)
			return
		}

		if (cart.length === 0) {
			setError("Savatingiz bo'sh. Mahsulot qo'shing.")
			setLoading(false)
			return
		}

		// Prepare order data
		const orderData = {
			firstName: formData.firstName.trim(),
			lastName: formData.lastName.trim(),
			phoneNumber: formData.phoneNumber.trim(),
			address: formData.address.trim(),
			deliveryDateTime: formData.deliveryDateTime,
			additionalNotes: formData.additionalNotes.trim(),
			products: cart.map(item => ({
				productId: item.id,
				title: item.title,
				price: item.price,
				weight: item.weight,
				quantity: item.quantity,
				image: item.image,
			})),
		}

		try {
			const response = await fetch('http://localhost:5000/api/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			})

			// Check if response is ok before parsing
			if (!response.ok) {
				// Try to parse JSON error, fallback to status text
				let errorMessage = 'Xatolik yuz berdi'
				try {
					const errorData = await response.json()
					errorMessage = errorData.message || errorMessage
				} catch {
					errorMessage = `Server xatosi: ${response.status} ${response.statusText}`
				}
				throw new Error(errorMessage)
			}

			const data = await response.json()

			setSuccess(true)
			clearCart() // Clear the cart after successful order
			// Reset form after 2 seconds and close modal
			setTimeout(() => {
				onClose()
			}, 2000)
		} catch (err) {
			console.error('Order submission error:', err)
			if (err.message.includes('Failed to fetch')) {
				setError(
					"Server bilan bog'lana olmadi. Server ishga tushirilganligini tekshiring."
				)
			} else {
				setError(err.message || 'Buyurtma yuborishda xatolik yuz berdi')
			}
		} finally {
			setLoading(false)
		}
	}

	if (success) {
		return (
			<div className='modalOverlay' onClick={onClose}>
				<div
					className='modalContent successModal'
					onClick={e => e.stopPropagation()}
				>
					<div className='successIcon'>✓</div>
					<h2>Muvaffaqiyatli!</h2>
				</div>
			</div>
		)
	}

	return (
		<div className='modalOverlay' onClick={onClose}>
			<div className='modalContent' onClick={e => e.stopPropagation()}>
				<button className='modalClose' onClick={onClose}>
					&times;
				</button>
				<h2>Buyurtma berish</h2>

				{error && <div className='errorMessage'>{error}</div>}

				<form onSubmit={handleSubmit}>
					<div className='formRow'>
						<div className='formGroup'>
							<label htmlFor='firstName'>
								Ism <span className='required'>*</span>
							</label>
							<input
								type='text'
								id='firstName'
								name='firstName'
								value={formData.firstName}
								onChange={handleChange}
								placeholder='Ismingizni kiriting'
								disabled={loading}
								required
							/>
						</div>

						<div className='formGroup'>
							<label htmlFor='lastName'>
								Familiya <span className='required'>*</span>
							</label>
							<input
								type='text'
								id='lastName'
								name='lastName'
								value={formData.lastName}
								onChange={handleChange}
								placeholder='Familiyangizni kiriting'
								disabled={loading}
								required
							/>
						</div>
					</div>

					<div className='formGroup'>
						<label htmlFor='phoneNumber'>
							Telefon raqam <span className='required'>*</span>
						</label>
						<input
							type='tel'
							id='phoneNumber'
							name='phoneNumber'
							value={formData.phoneNumber}
							onChange={handleChange}
							placeholder='+998 90 123 45 67'
							disabled={loading}
							required
						/>
					</div>

					<div className='formGroup'>
						<label htmlFor='address'>
							Manzil <span className='required'>*</span>
						</label>
						<textarea
							id='address'
							name='address'
							value={formData.address}
							onChange={handleChange}
							placeholder="To'liq manzilni kiriting"
							rows='3'
							disabled={loading}
							required
						/>
					</div>

					<div className='formGroup'>
						<label htmlFor='deliveryDateTime'>
							Sana va vaqt <span className='required'>*</span>
						</label>
						<input
							type='datetime-local'
							id='deliveryDateTime'
							name='deliveryDateTime'
							value={formData.deliveryDateTime}
							onChange={handleChange}
							disabled={loading}
							required
						/>
					</div>

					<div className='formGroup'>
						<label htmlFor='additionalNotes'>Qo'shimcha izoh</label>
						<textarea
							id='additionalNotes'
							name='additionalNotes'
							value={formData.additionalNotes}
							onChange={handleChange}
							placeholder="Qo'shimcha ma'lumot yoki izohlaringizni yozing..."
							rows='3'
							disabled={loading}
						/>
					</div>

					<div className='orderSummary'>
						<h3>Buyurtma tarkibi</h3>
						<div className='orderItems'>
							{cart.map(item => (
								<div key={item.id} className='orderItem'>
									<span>{item.title}</span>
									<span>{item.quantity} ta</span>
								</div>
							))}
						</div>
					</div>

					<button type='submit' className='submitBtn' disabled={loading}>
						{loading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default SubmitFormModal
