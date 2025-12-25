import mongoose from 'mongoose'
import Product from '../../src/models/Product.js'

let isConnected = false

const connectDB = async () => {
	if (isConnected) return

	try {
		await mongoose.connect(process.env.MONGODB_URI)
		isConnected = true
		console.log('MongoDB connected')
	} catch (error) {
		console.error('MongoDB connection error:', error)
		throw error
	}
}

export default async function handler(req, res) {
	// Enable CORS
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

	if (req.method === 'OPTIONS') {
		return res.status(200).end()
	}

	const { id } = req.query

	try {
		await connectDB()

		if (req.method === 'GET') {
			const product = await Product.findById(id)
			if (!product) {
				return res.status(404).json({ message: 'Product not found' })
			}
			return res.status(200).json(product)
		}

		return res.status(405).json({ message: 'Method not allowed' })
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}
}
