import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
})

export const ProductsContext = createContext()
export const SetProductsContext = createContext()
export const CartContext = createContext()
export const AddToCartContext = createContext()
export const RemoveFromCartContext = createContext()
export const ManipulatingCartContext = createContext()
export const CartTotalContext = createContext()

export default function ApiContext({children}) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [manipulatingCart, setManipulatingCart] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)

  async function getAllProducts() {
   const {data} = await api.get('/products')
    setProducts(data)
  }

  async function addToCart(newCartItem) {
    const newItem = await api.post('/cart', newCartItem)
    setCart(prevCart => [...prevCart, newItem.data])
    getCartItems()
  }

  async function getCartItems() {
    const {data} = await api.get('/cart')
    setCart(data)

    let cartTotal = 0
      for (let i = 0; i < data.length; i++) {
        cartTotal += +data[i].price.substring(1)
      }
      console.log(cartTotal)
      setCartTotal(cartTotal.toFixed(2))
  }

  async function removeCartItem(id) {
    await api.delete(`/cart/${id}`)
    getCartItems()
  }

  useEffect(() => {
    let invalid = false
    getAllProducts()
    getCartItems()
    return () => {
      invalid = true
    }
  }, [])

  console.log(cartTotal)

  return (
    <ProductsContext.Provider value={products}>
    <SetProductsContext.Provider value={setProducts}>
    <CartContext.Provider value={cart}>
    <AddToCartContext.Provider value={addToCart}>
    <ManipulatingCartContext.Provider value={setManipulatingCart}>
    <RemoveFromCartContext.Provider value={removeCartItem}>
    <CartTotalContext.Provider value={cartTotal}>
        {children}
    </CartTotalContext.Provider>
    </RemoveFromCartContext.Provider>
    </ManipulatingCartContext.Provider>
    </AddToCartContext.Provider>
    </CartContext.Provider>
    </SetProductsContext.Provider>
    </ProductsContext.Provider>
  )
}
