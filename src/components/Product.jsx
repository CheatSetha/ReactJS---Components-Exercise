import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='w-9/12 mx-auto'>
      <h1 className='text-center font-bold text-2xl my-5'> Our product</h1>
      <section className="product-lists flex flex-wrap gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
       
      </section>
    </div>
  )
}

export default Product