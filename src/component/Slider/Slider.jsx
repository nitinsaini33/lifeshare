import React from 'react';

import img from '../images/c1.png'



console.log('api key ',process.env)
const Slider = () => {


   
  return (
    <div className='container'>
        <div className="slider-image">
            <img src={img} alt="" />
        </div>




    </div>
  )
}

export default Slider