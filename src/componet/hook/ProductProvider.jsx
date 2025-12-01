import { useState } from 'react'
import { ProductContext } from "./ProductContext";

const ProductProvider = ({ children }) => {
    const [value, setValue] = useState("Hello")

    return (
        <ProductContext.Provider value={{ value, setValue }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
