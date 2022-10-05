import React from 'react';
import './Slider/Commen.css'





const Cart = ({ cartItems, handleRemove ,total}) => {
 return (
    <div className='cart-box'>
      {
        cartItems?.length > 0 ? cartItems?.map((item, index) => {
          return (
            <div className="cart-item-wraper">

              <div className='cart-main' key={index}>
                <div className='addto-cart'>
                  <div className='addto-image'>
                    <img src={item?.url} />

                  </div>
                  <div className='title-main'>
                    <div className='title-price'>
                      <h3 className='addto-title'>{item?.title}</h3>
                      <h3 className='addto-img'><span>$</span> {item?.price}</h3>
                    </div>
                    <button onClick={() => handleRemove(item?.title)}>REMOVE</button>
                  </div>
                </div>
                {
                  cartItems?.length > 0 &&

                  <div className='price-details'>
                    <div className='item'>
                      <span> Sub Total </span>
                      <span>${total} </span>
                      <span className='item-thnk'>Delivery </span>
                    </div>
                    <div className='total-cheack'>
                      <div className='item-total'>
                        <span>Total</span>
                        <span>${total}</span>
                      </div>
                      <div className='item-btn'>
                        <button>Check Out</button>
                      </div>
                    </div>

                  </div>



                }
              </div>
            </div>
          )
        }) : <div className='no-item'>
          <h2> <span>Please</span> Add to Cart</h2>


        </div>
      }
    </div>
  )
}

export default Cart;