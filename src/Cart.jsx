import React, {useContext, useEffect, useState } from 'react'
import { CartContext, RemoveFromCartContext } from './utils/ApiContext'

export default function Cart() {
const [cartTotal, setCartTotal] = useState(0)

  const cart = useContext(CartContext) 
  const removeCartItem = useContext(RemoveFromCartContext)

  function calculateCartTotal(cart) {
    let cartTotal = 0
    for (let i = 0; i < cart.length; i++) {
      cartTotal += +cart[i].price.substring(1)
    }
    setCartTotal(cartTotal.toFixed(2))
  }

  useEffect(() => {
    calculateCartTotal(cart)
  }, [])
  

  const handleDelete = async (id) => {
    await removeCartItem(id)
    calculateCartTotal(cart)
  }

  console.log(cart)

  return (
    <div className='flex gap-4'>
        <section className='w-[80vw] h-screen bg-slate-400'>
          <div className='m-auto text-center'>
            <h1 className='text-4xl mt-20'>Products in cart</h1>
            <div className='grid grid-cols-2 mx-auto mt-12'>
            {cart && cart.map(cartItem => (
              <div key={cartItem.id}>
              <div  className='bg-emerald-200 md:w-96 mx-auto rounded-sm py-4'>
              <span className='text-xl'>{cartItem.name}</span>
              </div> 

              <div className='mb-4'>
              <p className='text-right mr-12'>Price: {cartItem.price}</p>
              <button className='bg-orange-200 block ml-auto mr-9 px-1 rounded-sm' onClick={() => handleDelete(cartItem.id)}>Remove from cart</button>
              </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        <section className='w-[20vw] h-screen bg-slate-700'>
          <div className='m-auto w-fit text-center mt-36'>
            <p className='text-slate-200 text-3xl'>Total price: <span>${cartTotal}</span></p>
            <button className='p-2 bg-emerald-300 text-slate-700 text-lg hover:animate-pulse rounded-sm border-2 border-emerald-100 mt-2 active:translate-y-2'>Proceed to checkout</button>
          </div>
        </section>
    </div>
  )
}
