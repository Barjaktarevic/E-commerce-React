import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function Babies() {

  const setProducts = useContext(SetProductsContext)

  return (
    <div>Babies</div>
  )
}
