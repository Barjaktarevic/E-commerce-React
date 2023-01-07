import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function Electronics() {

  const setProducts = useContext(SetProductsContext)
  
  return (
    <div>Electronics</div>
  )
}
