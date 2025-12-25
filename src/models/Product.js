import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
	{
		id: Number,
		title: String,
		category: String,
		weight: String,
		image: String,
		price: Number,
		stock: Number,
		isActive: Boolean,
	},
	{ timestamps: true }
)

export default mongoose.model('Product', productSchema, 'products')
