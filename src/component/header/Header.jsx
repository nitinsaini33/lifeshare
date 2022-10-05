import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {RiShoppingBasketFill} from 'react-icons/ri'
import {app} from '../Firebase.confing'
import avtar from '../images/avatar.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from '../images/logo.png'
import {MdLogout} from 'react-icons/md'
import  {IoMdAddCircleOutline} from 'react-icons/io'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Header.css';
import Model from '../Model/Model';
import { async } from '@firebase/util';


const Header = ({handleRemove,cartItems,auth}) => {
  const [show, setShow] = useState(false);
  const [active,setActive]= useState(false);

  const firebaseAuth =getAuth(app);
  // open signup popup 
  const provider = new  GoogleAuthProvider();

 
//  handel  login 
  const login=async()=>{
    
     const {user :{providerData}}=await signInWithPopup(firebaseAuth,provider);

 
  // save data to local storage
  localStorage.setItem('user',JSON.stringify(providerData[0]))
  }

  // open toggle mobile menu
 
  const handleMenu = () => {
    setShow(!show)
  }
  // toggle cart model
  const handleShow =()=>{
    setActive(!active)
  

  }


  

  const navdata = [
    {
      title: 'Home',
      path: '/'
    },
    
    {
      title: 'New-Item',
      path: '/New-Item'

    },
    

  ]
  return (
    <>
  
    <div className='header-main'>
      <span className='menu' onClick={handleMenu}><GiHamburgerMenu/></span>
      <div className="header-leftside">
        <div className='logo'>
        <img  src={logo}/>
          <span > City</span>
          </div>
      </div>
      <div className={`header-rightside ${show ? "show" : ''}`}>
        {
          navdata?.map((item) => {
            return (
              <>
              {/* {auth?.displayName} */}
                <Link className='link' to={item.path}>{item.title}</Link>

              </>
            )
          })
        }



        <div  className='cart-icon'>
          <span className='cart-logo'><RiShoppingBasketFill  onClick={handleShow} /></span>
          <span className='cart-count'>{cartItems?.length>0?cartItems?.length:"0"}</span>
        </div> 

       {auth? 
       <img className='login-img' src={auth?.photoURL}/>
      
       :
       <img className='login-img' src={avtar}

       onClick={login}/>
       
       }

   
      
      </div>
    

      
    </div>
    {active &&  <Model handleRemove={handleRemove} cartItems={cartItems} />}
    </>
  )
}

export default Header;