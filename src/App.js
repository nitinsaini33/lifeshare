import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Header from './component/header/Header';
import Home from './component/Home';
import Model from './component/Model/Model';
import UploadImage from './component/UplodImg/UploadImage';

function App() {
  const [cartItems,setCartItem]=useState("");
  const handleItem =(product)=>{
    console.log(product);
    setCartItem([...cartItems,product])
   
  }
   const handleRemove= (title)=>{

    const newCartItems=cartItems.filter((item)=> item.title !==title)
   console.log(newCartItems)
    if(newCartItems){
      setCartItem(newCartItems)
     
    }
    

   }
  return (
    <div className='app-main'>
      <BrowserRouter>
      <Header handleRemove={handleRemove} cartItems={cartItems}/>

      <Routes>
        <Route path='/' element={<Home handleItem={handleItem}  />}/>
        <Route path='/New-Item' element={<UploadImage/>}/>
      
   

      
      </Routes>
        </BrowserRouter>

      
    </div>
    
   
  );
}

export default App;
