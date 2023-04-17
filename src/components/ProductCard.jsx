import React from 'react'

const ProductCard = () => {
  return (
    <div>
         <div className="card-product w-[200px] shadow-2xl">
          <img className='w-[200px] ' src="https://m.media-amazon.com/images/I/51r2QUmklPS._AC_UL480_FMwebp_QL65_.jpg" alt="product-img" />
          <div className="decsription">
            <h2 className='font-bold px-2'>Srek doll</h2>
            <p className='px-2 text-[12px] opacity-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
    </div>
  )
}

export default ProductCard