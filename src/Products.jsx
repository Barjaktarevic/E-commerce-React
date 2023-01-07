import React, { useState, useContext } from 'react'
import Sidebar from './components/Sidebar'
import Electronics from './categories/Electronics'
import Babies from './categories/Babies'
import Curtains from './categories/Curtains'
import HouseholdAppliances from './categories/Household appliances'
import Games from './categories/Games'
import Toiletries from './categories/Toiletries'
import { ProductsContext } from './utils/ApiContext'

export default function Products() {

  const [activeCategory, setActiveCategory] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState([])

  const toggleActiveCategory = (categoryNum) => {
    setActiveCategory(categoryNum)
  }

  const products = useContext(ProductsContext)

  return (
    <div className='flex'>
        <Sidebar className="flex-none" toggleActiveCategory={toggleActiveCategory} activeCategory={activeCategory}/>
        <div className='flex flex-col align-center w-full h-full'>
            <h1 className='text-4xl text-center mx-auto mt-2'>All our products</h1>
            {activeCategory === 1 && <Electronics />}
            {activeCategory === 2 && <HouseholdAppliances />}
            {activeCategory === 3 && <Babies />}
            {activeCategory === 4 && <Toiletries />}
            {activeCategory === 5 && <Games />}
            {activeCategory === 6 && <Curtains />}
        </div>
    </div>
  )
}
