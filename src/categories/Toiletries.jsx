import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function Toiletries() {
  
  const setProducts = useContext(SetProductsContext)
  
  return (
    <div>Toiletries</div>
  )
}
