import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import AOS from 'aos';
import Contact from '../Components/Contact'
import 'aos/dist/aos.css';
import { Data } from '../Data';

const Servicesdetails = () => {

    const {id}=useParams();
     const products= Data.filter((i)=>i.id ==id);
     const product = products[0];
   
    // aos for animation with scroll
	AOS.init({
		duration: 2000,
		once: false
	});
  return (
     <>
     <div className="servicedetails">
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


 {/* services details */}
     <div className="container">
     <div className="row my-5  w-100 align-items-center">
    {product&&
    <>
    <div className="col-md-6">
    <div className="items px-lg-0 px-4">
       <h1 data-aos="fade-up"
     data-aos-duration="3000" className='my-3 fw-bolder'>{product.title}</h1>
       <p className='text-black-50 my-4 fw-bolder'>
        {product.disc}


       </p>
       <hr className='text-dark bg-dark fs-2'/>

    </div>
</div>

{/* second colums */}
<div className="col-md-6">
    <div className="items d-flex align-items-center justify-content-center">
         <img data-aos="zoom-in" src={product.imgUrl} className='w-75 rounded-3' alt="services"/>
    </div>
</div>
    </>
    }
{/* first colum */}

</div>
     </div>



     {/* contact */}
     <Contact/>
     </div>
     </>
  )
}

export default Servicesdetails