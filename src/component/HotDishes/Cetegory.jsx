import React from 'react'
import {GiHamburger} from 'react-icons/gi'


const Cetegory = ({handelFilter}) => {


    const catdata=["Chicken","Curry","Rice","Fish","Fruits","Icecreame","Soft-drink"];
   


  return (
    <div  className='cetegory'>

      {
        catdata?.map((cat)=>{
          return(
            <>
            <div onClick={()=>handelFilter(cat)}className='cat'>
              <span><GiHamburger/></span>
              <p>{cat}</p>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Cetegory