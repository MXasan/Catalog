import { useContext } from "react"
import { ProductContext } from "./ProductContext"

const useProduct = () => useContext(ProductContext)

export default useProduct