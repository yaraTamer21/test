import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Goals from '../Components/Goals'
import Message from '../Components/Message'
import Mission from '../Components/Mission'
import Services from '../Components/Services'
import Sliders from '../Components/Sliders'
import SocialResponsibility from '../Components/SocialResponsibility'
import Valuability from '../Components/Valuability'

const Home = () => {
  return (
    <>
  <div className=''>
    {/* slider  section*/}
    <Sliders/>
    {/* about section */}
  <About/>

  {/* goals section */}
  <Goals/>

{/* message sevtion */}
<Message/>
  {/* services section */}
  <Services/>
  {/* valiability */}
  <Valuability/>
  {/* socail */}
<SocialResponsibility/>
 {/* misson */}
 <Mission/>


  {/* contact section */}
  <Contact/>
  </div>
    </>
  )
}

export default Home