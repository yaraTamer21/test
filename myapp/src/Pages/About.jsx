import React from 'react'
import HeaderAbout from '../Components/HeaderAbout'
import About from '../Components/About'
import Valuability from '../Components/Valuability'
import SocialResponsibility from '../Components/SocialResponsibility'
import Mission from '../Components/Mission'
const Abouts = () => {
  return (
    <>
    {/* header in about */}
    <HeaderAbout/>
    {/* about section */}
    <About/>
      {/* valiability */}
  <Valuability/>
  {/* socail */}
<SocialResponsibility/>
 {/* misson */}
<div className='py-5'>
<Mission/>
</div>

    </>
  )
}

export default Abouts