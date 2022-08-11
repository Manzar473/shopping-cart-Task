import React from 'react'

function Product({product,onAdd}) {
  return (
    <div>
      <div className='card'>
        <img className='small' src={product.image} alt={product.name}></img> 
        <h3 className='productName'>{product.name}</h3>
        <div className='productPrice'>PKR {product.price}/-</div>
        <div className='productName'>
            <button onClick={()=>onAdd(product)} className='AddToCartBtn'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product