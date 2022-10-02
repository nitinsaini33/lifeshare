import React, { useEffect } from 'react'
import './UploadImage.css'
import  {useState} from "react"
import { storage ,db} from '../Firebase.confing'
import {ref} from 'firebase/storage'
import {v4} from 'uuid';
import { uploadBytes,getDownloadURL ,uploadBytesResumable } from 'firebase/storage';
import {collection, addDoc, Timestamp,query, orderBy, onSnapshot} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const UploadImage = () => {


const initialState={
  title:'',
  url:'',
  category:'',
  calories:'',
  price:'',
}

    const [imgeUpload,setImgUpload]=useState(null);
    const[data,setData]=useState(initialState)
const[product,setProduct]=useState([])
    const storageRef = ref(storage,`/images/${imgeUpload?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imgeUpload);
 const navigate=useNavigate();
    let name;
    let  value;
   const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setData({...data,[name]:value})
   
  
   }
   const handleCat=(e)=>{
  
     setData({category:e.target.value})
     
    }
    console.log('data',data)
   const handleColries=(e)=>{
   setData({colories:e.target.value})
   }
   const handlePrice=(e)=>{
    setData ({price:e.target.value})
   }
  
    const handleUload=()=>{
        if (imgeUpload==null)return alert('choose file');
        const imageRef =ref(storage,`images/${imgeUpload?.name + v4()}`)
        uploadBytes(imageRef,imgeUpload).then((res)=>{
         console.log("Image Uploaded",res) 
        })
      
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log('url',url);
          setData({url:url})
          
          addDoc(collection(db, 'mydata'), {
            title: data.title,
            url: url,
            category:data.category,
            price:data.price,
           calories:data.calories,
            created: Timestamp.now()
          }).then((res)=>{
            console.log('res',res)
          }).catch((error)=>{
            console.log('error---',error.message)
          })
        

      });

      navigate('/')

      console.log('data',data)
   

    };
    
      

   
    

  
    useEffect(() => {
      Fetchdata();
    },[])

    const Fetchdata = ()=>{
      const q = query(collection(db, 'mydata'), orderBy('created', 'desc'))
      onSnapshot(q, (querySnapshot) => {
        setProduct(querySnapshot.docs.map(doc => doc.data()))
      }

      )}


 



   
   
  return (
    <div className='post-product'>
      <div className='post-main'>
        <div className='postProduct-title'>
          <input type="text" name="title" placeholder='title' onChange={handleChange} />
            <input type='text' name='calories' placeholder='Calories' onChange={handleChange}/>
            <input type='text' name='price' placeholder='Price'onChange={handleChange}/>
            </div>
            <div className='select-btn'>     
            <select name="category" onChange={handleChange}>
            <option  >Choose </option>
            <option value="chicken">Chicken</option>
            <option value="curry">curry</option>
            <option valu="rice">Rice</option>
            <option value="fish">Fish</option>
            <option valu="fruits">Fruits</option>
            <option value="icecreame">Icecreame</option>
            <option vlaue="soft-drink">Soft-drink</option>
           </select>
           <input className='input-file' type="file" onChange={(event)=>{setImgUpload(event.target.files[0])}}/>
           </div> 
            <div className='upload-btn'>
            <button onClick={handleUload}>Upload Image</button>
            
           
            </div>
            


          
        
            </div>
    </div>
  );
}

export default UploadImage;