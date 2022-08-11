import React from 'react'
import "./Main.css"
import Product from './Product'

function Main(props) {
  const {products,onAdd}=props;
  return (
    <div className='col-2 ProductsHead '>
    <h2 className='productHead'>Products</h2>
    <div className='ProductHandle'>
      {products.map((product)=>(
        <Product onAdd={onAdd} key={product.id} product={product}/>
      ))}
    </div>
    </div>
  )
}

export default Main