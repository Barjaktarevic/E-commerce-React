import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function Games() {
  const setProducts = useContext(SetProductsContext)
  
  return (
    <div>Games</div>
  )
}
