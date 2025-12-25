import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import Order from './src/models/Order.js'
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

// Create new order
app.post('/api/orders', async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			phoneNumber,
			address,
			deliveryDateTime,
			additionalNotes,
			products,
		} = req.body

		// Validate required fields
		if (
			!firstName ||
			!lastName ||
			!phoneNumber ||
			!address ||
			!deliveryDateTime ||
			!products ||
			products.length === 0
		) {
			return res.status(400).json({
				message: "Iltimos, barcha majburiy maydonlarni to'ldiring",
			})
		}

		// Calculate total amount
		const totalAmount = products.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		)

		// Create new order
		const order = new Order({
			firstName,
			lastName,
			phoneNumber,
			address,
			deliveryDateTime,
			additionalNotes,
			products,
			totalAmount,
		})

		const savedOrder = await order.save()
		res.status(201).json({
			message: 'Buyurtma muvaffaqiyatli qabul qilindi!',
			order: savedOrder,
		})
	} catch (error) {
		console.error('Order creation error:', error)
		res.status(500).json({ message: 'Xatolik yuz berdi: ' + error.message })
	}
})

// Get all orders (for admin/agent view)
app.get('/api/orders', async (req, res) => {
	try {
		const orders = await Order.find().sort({ createdAt: -1 })
		res.json(orders)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
