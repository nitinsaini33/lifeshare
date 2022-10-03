import React, { useState } from 'react'
import {RiShoppingBasketLine} from 'react-icons/ri';
import './style.css'


const Dishes = ({handleItem,product}) => {
    
  

  
 

  return (
    

    <div className='dishes-item'>
        {
            product.map((item)=>{
             return(
                
<div className='dishes'>
        
        <div className='dishes-main'>
            <img src={ item.url}/>
            </div>
            


       
        <div className='dishes-title'>
        <h4 onClick={()=>handleItem(item)} ><RiShoppingBasketLine/></h4>
            <h3 className='sub-title'>{item.title}</h3>
            <h4 className='sub-title'>{item.category}</h4>
            <span className='calories'>{item.calorie}</span>
            <h3 className='price'> <span>$</span> {item.price}</h3>
        </div>
        




    </div>


             )
            })
        }

    </div>
  
  )
}

export default Dishes