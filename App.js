import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import data from './components/data';
import { useState } from 'react';
function App() {
  const {products}=data;
  const [cartitems,setCartitem]=useState([])

  const onAdd=(product)=>{
   const exist= cartitems.find((x)=>x.id===product.id)
    if(exist)
    {
      setCartitem(cartitems.map(x=>x.id===product.id?{...exist,qty:exist.qty+1}:x))
    }
    else{
      setCartitem([...cartitems,{...product,qty:1}])
    }

  }


  const onRemove=(item)=>{
  if(item.qty===1){
    setCartitem(cartitems.filter((x)=>x.id!=item.id))
  }
  else{
    setCartitem(cartitems.map(x=>x.id===item.id? {...x,qty:x.qty-1}:x))
  }

  }


  const onCross=(item)=>{
   setCartitem(cartitems.filter(x=>x.id!==item.id))

  }


 return (
    <div className="App">
    <Header cartitems={cartitems}/> 
    <div className='row'>
      
      <Main onAdd={onAdd} products={products}/>
      <Cart onCross={onCross} onAdd={onAdd} onRemove={onRemove} cartitems={cartitems}/>
      
      </div>      
    </div>
  );
}

export default App;
