import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const ProductsContext = createContext()
export const SetProductsContext = createContext()

export default function ApiContext({children}) {
  const [products, setProducts] = useState([])

  return (
    <ProductsContext.Provider value={products}>
    <SetProductsContext.Provider value={setProducts}>
        {children}
    </SetProductsContext.Provider>
    </ProductsContext.Provider>
  )
}
