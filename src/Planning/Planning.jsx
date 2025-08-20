import React from 'react'
import './Planning.css'
import { assets } from '../assets/assets'

const Planning = () => {
  return (
    <div>


      <div className='plannings'>

        <div className='main-head'>
          <h1 className='main-head-a'>Transform Your Home In</h1>
          <h1 className='main-head-b'>Three Easy Steps</h1>
        </div>

           <div className='main-fx'>

        <div className='flexx'>


          <div className='steps'>
            <h1 className='step-a'>01</h1>
            <h1 className='step-b'>Consultation & Concept</h1>
            <p className='step-c'>"We collaborate with u to understand your vision</p>
            <p className='step-d'>and design concept.</p>
          </div>
           <div className='consult'>
            <img className='consult-img' src={assets.consulting} width={380} height={300} />
          </div>
          <div className='steps'>
            <h1 className='step-a'>02</h1>
            <h1 className='step-b'>Design & Planning</h1>
            <p className='step-c'>"We collaborate with u to understand your vision</p>
            <p className='step-d'>and design concept.</p>
          </div>
          <div className='plan'>
            <img className='plan-img' src={assets.plan_details} width={380} height={300} />

          </div>
          <div className='steps'>
            <h1 className='step-a'>03</h1>
            <h1 className='step-b'>Excution & Reveal</h1>
            <p className='step-c'>"We collaborate with u to understand your vision</p>
            <p className='step-d'>and design concept.</p>
          </div>
          <div className='excution'>
            <img className='excution-img' src={assets.kitchen_hall} width={350} height={300} />
          </div>

        </div>





        

        </div>


        <div>

        </div>













      </div>








    </div>
  )
}

export default Planning