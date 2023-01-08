import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Electronics({filteredProducts}) {
  
  return (
    <div className='flex flex-row md:h-[50vh] w-full justify-center align-middle gap-12 m-auto text-center mt-12'>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}
