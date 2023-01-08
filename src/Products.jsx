import React, { useState, useContext, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Electronics from './categories/Electronics'
import Babies from './categories/Babies'
import Curtains from './categories/Curtains'
import HouseholdAppliances from './categories/Household appliances'
import Games from './categories/Games'
import Toiletries from './categories/Toiletries'
import { ProductsContext } from './utils/ApiContext'
import { GiBottomRight3DArrow } from 'react-icons/gi';

export default function Products() {

  const [activeCategory, setActiveCategory] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState([])

  const products = useContext(ProductsContext)

  const toggleActiveCategory = (categoryNum, products) => {
    setActiveCategory(categoryNum)
    filterProductsBasedOnCategory(products)
  }

  const filterProductsBasedOnCategory = (products) => {
    if (products) {
      if (activeCategory === 1) {
        const newProducts = products.filter(product => product.category === "electronics")
        setFilteredProducts(newProducts)
      }
      if (activeCategory === 2) {
        const newProducts = products.filter(product => product.category === "household appliances")
        setFilteredProducts(newProducts)
      }
      if (activeCategory === 3) {
        const newProducts = products.filter(product => product.category === "babies")
        setFilteredProducts(newProducts)
      }
      if (activeCategory === 4) {
        const newProducts = products.filter(product => product.category === "toiletries")
        setFilteredProducts(newProducts)
      }
      if (activeCategory === 5) {
        const newProducts = products.filter(product => product.category === "games")
        setFilteredProducts(newProducts)
      }
      if (activeCategory === 6) {
        const newProducts = products.filter(product => product.category === "curtains")
        setFilteredProducts(newProducts)
      }
    }
  }

  useEffect(() => {
    products && filterProductsBasedOnCategory(products)
  }, [activeCategory])

  return (
    <div className='flex'>
        <Sidebar className="flex-none" toggleActiveCategory={toggleActiveCategory} activeCategory={activeCategory}/>
        <div className='flex flex-col align-center w-full h-full'>
            {activeCategory === 0 && <div className='relative text-center mt-24'>
              <GiBottomRight3DArrow className="h-32 w-32 absolute -left-12 top-10 rotate-[95deg] text-emerald-500 animate-pulse"/>
              <h1 className='text-2xl w-fit py-4 ml-4 animate-bounce'>Select a category</h1>
            </div>}
            {activeCategory !== 0 && <h1 className='text-4xl text-center mx-auto mt-2'>All our products</h1>}
            {activeCategory === 1 && <Electronics filteredProducts={filteredProducts}/>}
            {activeCategory === 2 && <HouseholdAppliances filteredProducts={filteredProducts}/>}
            {activeCategory === 3 && <Babies filteredProducts={filteredProducts}/>}
            {activeCategory === 4 && <Toiletries filteredProducts={filteredProducts}/>}
            {activeCategory === 5 && <Games filteredProducts={filteredProducts}/>}
            {activeCategory === 6 && <Curtains filteredProducts={filteredProducts}/>}
        </div>
    </div>
  )
}
