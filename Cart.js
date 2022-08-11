import React from 'react'
import {useState} from "react"

function Cart({cartitems,onAdd,onRemove,onCross}) {
  let totalprice=0
  return (
    <div className='col-1'>
      <h2 className='CartHead'>Cart Items</h2>
      <div>{cartitems.length===0 && <div className='CartEmpty'>Cart is Empty!</div>}</div>
     {cartitems.map(item=>(
      <div key={item.id} className='row alignCenter'>
        <div className='cartImg'><img src={item.image} alt={item.name}></img></div>
        <div className='CartitemName'>{item.name}</div>
        <div>
          <button onClick={()=>onAdd(item)} className='CartAddBtn'>+</button>
          <button onClick={()=>onRemove(item)} className='cartRemoveBtn'>-</button>
        </div>
        <div className='cartitemPrice'>
          {item.qty}X{item.price}
        </div>
        <div className='cartitemPrice'>
          {item.qty*item.price}
          <div className='None'>
          {totalprice=totalprice+item.qty*item.price}
          </div>
        </div>
        <div>
          <button onClick={()=>onCross(item)} className='removeBtn'>X</button>
        </div>
      </div>
     ))}
       
      {cartitems.length!==0 && <div className='Total-Price'>Total Price {totalprice}/-</div>}
    </div>
  )
}

export default Cart