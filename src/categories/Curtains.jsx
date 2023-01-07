import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function Curtains() {

  const setProducts = useContext(SetProductsContext)
  
  return (
    <div>Curtains</div>
  )
}
