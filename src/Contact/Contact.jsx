import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div>


            <div className='details'>

                <div className='center-head'>
                    <h1 className='centers-a'>Our Clients Love To Talk About Us</h1>
                    <p className='centers-b'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, totam!</p>
                    <p className='centers-c'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>


                <div className='flexess'>


                    <div className='headss'>
                        <div className='hea'>
                        <h1 className='heads-a'>Clients Feedback</h1>
                        <p className='heads-b'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Similique laudantium, molestias repellat a minima itaqu <br /> veritatis quis tempore exercitationem dolor praesentium <br /> porro maiores facilis sint iure officia hic ea, harum dolo. <br /> Totam numquam accusamus, iste natus laboriosam dolo <br /> magni alias, aliquid, atque odio cumque perferhaiuendis <br /> eos necessitatibus quaerat amet. Lorem ipsum dolor siit.</p>

                         </div>


                        <div className='images-heads'>
                            <div className='men'>
                                <img className='men-img' src="/src/assets/images/bussiness.png" width={50} height={50} />
                            </div>
                            <div className='headsss'>
                                <h1 className='headss-a'>John Doe</h1>
                                <p className='headss-b' >Lorem ipsum dolor sit.</p>
                                <div className='imrate'>
                                <img className='rate' src="/src/assets/images/star.png" width={200} height={200} />

                                </div>




                            </div>
                        </div>

                    </div>



                  <div className='design-img'>
                    <img className='design-at' src="/src/assets/images/designat.png" width={600} height={500} />

                  </div>




                </div>





            </div>







        </div>
    )
}

export default Contact