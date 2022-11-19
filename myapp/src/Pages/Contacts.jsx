import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Components/Contact'

const Contacts = () => {
  return (
   <>
    <div className="">
            {/* header in services */}
            <div className="about1-header">
      <div className="container">
        <div className='d-flex parent-header-about1 pt-3 pe-5 align-items-center justify-content-center text-dark'>
        <h2 className='fw-bolder  ' >
          <NavLink to='/'>الرئيسية</NavLink>
        </h2>
        <h2>/</h2>
        <h3 className='fw-bolder text-white' >التواصل معنا</h3>
      

        </div>

      </div>

  </div>
      
 <Contact/>
    
      </div>   

   
   
   </>
  )
}

export default Contacts