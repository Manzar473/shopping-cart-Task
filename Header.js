import React from 'react'
import "./Header.css"
function Header({cartitems}) {
  return (
    <div className='HeaderConatiner'>
        <div><h1>Shopping Store</h1></div>
        <div>
            <h5><ion-icon name="cart"></ion-icon>{cartitems.length!==0 && <span className='CartCounter'>{cartitems.length}</span>}</h5>
        </div>
    </div>
    
  )
}

export default Header