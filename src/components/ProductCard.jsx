import React, {useContext} from 'react'
import { AddToCartContext, ManipulatingCartContext  } from '../utils/ApiContext'

export default function ProductCard({product}) {

  const addToCart = useContext(AddToCartContext)
  const setManipulatingCart = useContext(ManipulatingCartContext)

  const handlePost = () => {
    const newCartItem = {name: product.name, description: product.description, image: product.image, category: product.category, price: product.price, id:product.id }
    setManipulatingCart(true)
    addToCart(newCartItem)
    }

  return (
    <div>
        <h1 className='text-xl mb-2'>{product.name}</h1>
        <img src={product.image} alt={product.name} className="h-44 w-44 object-cover mx-auto border-4 border-emerald-200 rounded-md"/>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <small className='italic'>{product.category}</small>
        <div>
            <button className='bg-emerald-200 px-3 active:translate-y-2 rounded-md' onClick={handlePost}>Add to cart</button>
        </div>
    </div>
  )
}
