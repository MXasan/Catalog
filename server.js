import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import Product from './src/models/Product.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('MongoDB connected successfully'))
	.catch(err => console.error('MongoDB connection error:', err))

// Routes
app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find({ isActive: true })
		res.json(products)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.get('/api/products/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (!product) {
			return res.status(404).json({ message: 'Product not found' })
		}
		res.json(product)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
