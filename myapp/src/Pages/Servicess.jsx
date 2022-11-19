import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from '../Components/Contact'
import Goals from '../Components/Goals'
import Mission from '../Components/Mission'
import Services from '../Components/Services'
const Servicess = () => {
  return (
    <>
      <div className="services_page">
            {/* header in services */}
            <div>
      <div className="about1-header">
          <div className="container">
            <div className='d-flex parent-header-about1 pt-3 align-items-center justify-content-center text-dark'>
            <h2 className='fw-bolder  ' >
              <NavLink to='/'>الرئيسية</NavLink>
            </h2>
            <h2>/</h2>
            <h3 className='fw-bolder text-white' >الخدمات</h3>
          

            </div>

          </div>

      </div>

    
      </div>   

        <Services/>
        <Goals/>
        <Mission/>

        <Contact/>
      </div>
    </>
  )
}

export default Servicess