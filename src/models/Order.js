import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		phoneNumber: {
			type: String,
			required: true,
			trim: true,
		},
		address: {
			type: String,
			required: true,
			trim: true,
		},
		deliveryDateTime: {
			type: Date,
			required: true,
		},
		additionalNotes: {
			type: String,
			trim: true,
			default: '',
		},
		products: [
			{
				productId: {
					type: mongoose.Schema.Types.Mixed,
					required: true,
				},
				title: String,
				price: Number,
				weight: String,
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				image: String,
			},
		],
		totalAmount: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'confirmed', 'preparing', 'delivered', 'cancelled'],
			default: 'pending',
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model('Order', orderSchema)

export default Order
