import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderAbout = () => {
  return (
    <>
    <div>
      <div className="about1-header">
          <div className="container">
            <div className='d-flex parent-header-about1 pt-3 align-items-center justify-content-center text-dark'>
            <h2 className='fw-bolder  ' >
              <NavLink to='/'>الرئيسية</NavLink>
            </h2>
            <h2>/</h2>
            <h3 className='fw-bolder text-white' >من نحن</h3>
          

            </div>

          </div>

      </div>

    
      </div>
    </>
  )
}

export default HeaderAbout