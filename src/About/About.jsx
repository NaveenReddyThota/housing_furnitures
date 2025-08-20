import React from 'react'
import './About.css'

const About = () => {
  return (
    <div >

        <div className='side-headings' >
            <div className='side'>
                <h1 className='left' >Bringing Timeless</h1>
                <h2 className='left-a'>Elagance and Natural</h2>
                <h3 className='left-b'>Beauty to your Space</h3>
            </div>
            <div className='side-paragraph'>
                <p className='right'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> sint sunt temporibus cumque ratione reprehenderit, nece <br /> ducimus repellendus suscipit aspernatur ex .</p>
                <button className='des'>Design yours</button>
            </div>
        </div>



        <div className='images'>
            <div className='left-img'>
                <h1 className='left-heading'>Minimalist Design</h1>
                <p className='para-a'>Lorem ipsum dolor sit amet.</p>
                <p className='para-b'>Lorem, ipsum dolor.</p>

            </div>
           
           <div className='flex'>

         
            <div className='right-head'>
                 <h1 className='right-heading'>Minimalist Design</h1>
                <p className='para-c'>Lorem ipsum dolor sit amet.</p>
            </div>
             <div className='right-img'>
                 <h1 className='right-headings'>Minimalist Design</h1>
                <p className='para-d'>Lorem ipsum dolor sit amet.</p>
             </div>
             </div>
        </div>



        <div>
            
        </div>




    </div>
  )
}

export default About