import React from 'react'
import Cart from '../Cart'

const Model = ({handleRemove,cartItems}) => {
  return (
  
      
        <div className='model-main'>
            <Cart cartItems={cartItems} handleRemove={handleRemove}  />
        </div>
   
  )
}

export default Model