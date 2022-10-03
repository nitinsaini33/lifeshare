import React from 'react'
import img from '../images/f1.png';
import img2 from '../images/i1.png';
import img3 from '../images/r2.png';
import img4 from '../images/fi1.png';
import heroBg from '../images/heroBg.png';
import './Rightside.css';
import Heading from '../common/Heading';

const Rightside = () => {

  const data = [
    {
      id: 1,
      title: 'Strawberries',
      subTitle: 'Frest Strawbererries',
      price: '10.5',
      images: img,

    },
    {
      id: 2,
      title: 'Icecream',
      subTitle: 'Chocoilate $ Vanilla',
      price: '5.25',
      images: img2
    },
    {
      id: 3,
      title: 'Chicken Kebab',
      subTitle: 'Mixed Kebab Plate',
      price: '8.25',
      images: img3
    },
    {
      id: 4,
      title: 'Fish Kebab',
      subTitle: 'Mixed Fish Kabab',
      price: '5.25',
      images: img4
    },

  ]
  




  return (
    <div className='rightside-main'>
      <img src={heroBg} className="heroBg" />
      <div className="right-box">
        {


          data?.map((item) => {
            return (
              <>
                <div className='image1 flex'>
                  <div className="img">

                    <img src={item.images} />

                   <div className="details">
                    <Heading as="h3" title={item.subTitle} />

                    <h3> <span>$</span>{item?.price}</h3>
                   </div>
                  </div>


                </div>
              </>
            )
          })


        }

      </div>



    </div>
  )
}

export default Rightside