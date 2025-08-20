import React from 'react'
import './Design.css'
import { assets } from '../assets/assets'

const Design = () => {
  return (
    <div>
     

     <div className='centerr-headings'>
        <div className='center'>
            <h1 className='center-a'>See How We've Transformed</h1>
            <h1 className='center-b'>Spaces Into Beautiful Works Of Art.</h1>

        </div>
        <div className='buttons-all'>
            <button className='but-a'>Living Room</button>
            <button className='but-b'>Bedroom</button>
            <button className='but-b'>Office Workspace</button>
            <button className='but-b'>Explore More</button>

        </div>

     </div>

     <div className='slider'>  
        <div className='slider-img'>
            <input type="radio" name='slide' id='img1' checked />
            <input type="radio" name='slide' id='img2' checked />
            <input type="radio" name='slide' id='img3' checked />
            <input type="radio" name='slide' id='img4' checked />

            <img src={assets.furniture} className='img-a' alt="img1"  width={1000} height={700} />
            <img src="/src/assets/images/img2.png" className='img-b' alt="img2"  width={1000} height={700} />
            <img src="/src/assets/images/img3.png" className='img-c' alt="img3"  width={1000} height={700} />
            <img src="/src/assets/images/img4.png" className='img-d' alt="img4"  width={1000} height={700} />

        </div>

        <div className='dots'>
            <label htmlFor="img-a"></label>
            <label htmlFor="img-b"></label>
            <label htmlFor="img-c"></label>
            <label htmlFor="img-d"></label>

        </div>

     </div>


    </div>
  )
}

export default Design