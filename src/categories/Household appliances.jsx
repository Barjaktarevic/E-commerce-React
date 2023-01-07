import React, { useContext } from 'react'
import { SetProductsContext } from '../utils/ApiContext'

export default function HouseholdAppliances() {

  const setProducts = useContext(SetProductsContext)
  
  return (
    <div>Household appliances</div>
  )
}
