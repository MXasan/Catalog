import { useEffect, useState } from 'react'
import { ProductContext } from './ProductContext'

const ProductProvider = ({ children }) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		fetch('/api/products')
			.then(res => res.json())
			.then(data => setValue(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<ProductContext.Provider value={{ value, setValue }}>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductProvider
