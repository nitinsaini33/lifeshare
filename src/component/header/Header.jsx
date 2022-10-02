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


const Header = ({handleRemove,cartItems}) => {
  const firebaseAuth =getAuth(app);
  const provider = new  GoogleAuthProvider();

 
  const login=async()=>{
    
     const {user :{refreshToken ,providerData}}=await signInWithPopup(firebaseAuth,provider);

 
  
  localStorage.setItem('user',JSON.stringify(providerData[0]))
  }
  const [show, setShow] = useState(false);
  const [active,setActive]= useState(false);

  const handleMenu = () => {
    setShow(!show)
  }
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
    {
      title: 'Con-Info',
      path: '/Con-Info'

    }

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
                <Link className='link' to={item.path}>{item.title}</Link>

              </>
            )
          })
        }



        <div ><RiShoppingBasketFill onClick={handleShow} /></div> 

       

       <img className='login-img' src={avtar}
       onClick={login}/>
      
      </div>
    

      
    </div>
    {active &&  <Model handleRemove={handleRemove} cartItems={cartItems} />}
    </>
  )
}

export default Header;