
import './Fordelver.css';
import {MdDirectionsBike} from 'react-icons/md';

const Fordelver = () => {
  return (
    <div className='fordelver-main'>
        <div className='fordelver-bike'>
            <h3>Bike Delivery<span><MdDirectionsBike/></span></h3>
        </div>
        <div  className='fordelever-text'>
            <h1>The Fastest Delevery in <span>Your City</span></h1>
        </div>
        <div className='fordelver-details'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br/>
                 Reiciendis cumque id repudiandae eos mollitia  <br/>
                 excepturi quibusdam alias eaque enim, sequi beatae  </p>
        </div>
        <div className='for-order'>
            <button>Order Now</button>
        </div>
    </div>
  )
}

export default Fordelver