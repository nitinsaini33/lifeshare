import React, { useState } from 'react'

import Fordelver from './leftside/Fordelver'
import Rightside from './Rightside/Rightside'
import Cetegory from './HotDishes/Cetegory'
import Dishes from './HotDishes/Dishes'
import { storage,db } from './Firebase.confing'
import { card } from './HotDishes/data'
import { collection,query,orderBy,onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { useEffect } from 'react'

const Home = ({handleItem}) => {

const [product,setProduct]=useState([]);
const [data,setData]=useState([])

useEffect(()=>{
  Fetchdata();
},[])
const Fetchdata =()=>{
   const q =query(collection(db,'mydata'),orderBy ('created','desc'))
   onSnapshot (q,(QuerySnapshot)=>{
  const res=QuerySnapshot.docs.map(doc=>doc.data())
  setProduct(res)
  setData(res)
  
   })
   
}
console.log('setprodect',product)


  const handelFilter=(e)=>{
console.log(e);
    const fillArr=data.filter((prod)=>prod.category.toLowerCase()===e.toLowerCase())
   console.log('hfill',fillArr);
   if(fillArr){
     setProduct(fillArr)

   }else{
    setProduct(card)
   }

    
  }
  
  return (

    <>
  
    <div className='home-wraper'>
     

<Fordelver/>
<Rightside/> 

    </div>
   <Cetegory handelFilter={handelFilter} />
   

   <Dishes handleItem={handleItem} product={product} />

    </>

  )
}

export default Home