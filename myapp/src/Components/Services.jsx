import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import { Data } from '../Data';
import 'aos/dist/aos.css';

const Services = () => {
  const [data, setData] = useState([]);

    console.log(data)
    // aos for animation with scroll
    AOS.init({
        duration: 2000,
        once: false
    });

  return (
    <>
      <div className="services py-5 mt-5">
        <div className="container">
           <div className="services-section">
            <h2 className=' fw-bolder  pe-3 pe-lg-0 '>الخدمات</h2>
             <div data-aos="fade-up"
     data-aos-duration="3000" className="row w-100 ">
      <h3   data-aos="zoom-in" className='mb-3 pe-lg-0 pe-md-3 pe-5'>الخدمات التسويقيه</h3>
           {Data.filter((i)=>i.cat==="تسويق").map((i,index)=><>
             <div key={index} className="col-lg-3 col-md-4 parent-servise mb-5">
                    <div className="items text-center">
                        <div className="icons-services m-auto mb-3">
                         <img src={i.imgUrl} className='w-100'/>
                        </div>
                        <h3 className='h5'>{i.title}</h3>
                    </div>
                </div>
           </>)}
           <hr/>

           <h3 data-aos="fade-up"
     data-aos-duration="3000" className='mb-3 mt-3 pe-lg-0 pe-md-3 pe-5 '>الخدمات الماليه</h3>
           {Data.filter((i)=>i.cat==="مالية").map((i,index)=><>
             <div key={index} className="col-lg-3 col-md-4 parent-servise mb-5">
                    <div className="items text-center">
                        <div className="icons-services m-auto mb-3">
                         <img src={i.imgUrl} className='w-100'/>
                        </div>
                        <h3 className='h5'>{i.title}</h3>
                    </div>
                </div>
           </>)}

              

            
  </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Services