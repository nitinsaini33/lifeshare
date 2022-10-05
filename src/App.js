import { useState,useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Header from './component/header/Header';
import Home from './component/Home';

import UploadImage from './component/UplodImg/UploadImage';

function App() {
  const [cartItems,setCartItem]=useState([]);

  const [auth,setAuth]=useState('')
  const handleItem =(product)=>{
   
   const isExist= cartItems.find((item)=>item.title===product.title)


if(!isExist){
  setCartItem([...cartItems,product])
}else{
  alert('Already exist.')
}

  
  
   
  }
   const handleRemove= (title)=>{

    const newCartItems=cartItems.filter((item)=> item.title !==title)
  
    if(newCartItems){
      setCartItem(newCartItems)
     
    }
    

   }
   let total=0;
   
   cartItems?.forEach((item)=>{
    total=total+Math.floor(item.price)
    
   })
   

   useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'));
if(user){
  console.log(user)
setAuth(user)
}
  

   },[])
  return (
    <div className='app-main'>
      <BrowserRouter>
      <Header handleRemove={handleRemove} cartItems={cartItems} auth={auth} />

      <Routes>
        <Route path='/' element={<Home handleItem={handleItem}  />}/>
        <Route path='/New-Item' element={<UploadImage/>}/>
      
   

      
      </Routes>
        </BrowserRouter>

      
    </div>
    
   
  );
}

export default App;
