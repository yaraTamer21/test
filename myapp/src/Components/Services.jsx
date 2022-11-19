import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import { Data } from '../Data';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

const Services = () => {
  const [data, setData] = useState([]);
const [check,setCheck]=useState(false)
const [check1,setCheck1]=useState(false)
const [check2,setCheck2]=useState(false)

    // console.log(data)
    
    // aos for animation with scroll
    AOS.init({
        duration: 2000,
        once: false
    });

    const getData=(x="تسويق")=>{
       if(x=="تسويق"){
        setCheck(true);
        setCheck1(false)
        setCheck2(false)

       }
       else if(x=="مالية"){
        setCheck(false);
        setCheck1(true)
        setCheck2(false)

       }
       else if (x=="الاعلان"){
        setCheck(false);
        setCheck1(false)
        setCheck2(true)
       }

      const filters=Data.filter((i)=>i.cat===x);
      setData(filters);


    }
  return (
    <>
      <div className="services py-5 mt-5">
        <div className="container">
           <div className="services-section">
            <h2 className=' fw-bolder  pe-3 pe-lg-0 '>الخدمات</h2>
                 
                 <div className="all-services">
                   <div className="row w-100 align-items-center justify-content-center">
                    {/* first services */}
                    <div className="col-md-4 mt-lg-0 mt-4">
                      <div className="items text-center">
                        <img onClick={()=>getData("تسويق")} src='./images/i.webp' className={check?'w-100 mb-4 rounded-circle images':'w-100 mb-4 rounded-circle'}/>
                       <h4 className='h4 text-black-50 fw-bolder'>الخدمات التسويقيه</h4>
                      </div>
                    </div>

                    {/* second services */}

                    <div className="col-md-4 mt-lg-0 mt-4">
                      <div className="items text-center">
                      <img    onClick={()=>getData("مالية")} src='./images/finanziario-holding.jpg' className={check1?'w-100 mb-4 rounded-circle images':'w-100 mb-4 rounded-circle'}/>

                      <h4 className='h4 text-black-50 fw-bolder '>الخدمات الماليه</h4>
                      </div>
                    </div>

                    {/* third services */}

                    <div className="col-md-4 mt-lg-0 mt-4">
                      <div className="items text-center">
                      <img  onClick={()=>getData("الاعلان")} src='./images/i (1).webp' className={check2?'w-100 mb-4 rounded-circle images':'w-100 mb-4 rounded-circle'}/>

                      <h4 className='h4 fw-bolder text-black-50'>خدمات الدعايا والاعلان والتصميم </h4>

                      </div>
                    </div>
                   </div>

                {data.length>0 &&   <div className="display-services row mt-4">
                    <hr/>
                   {data.length>0&& data.map((i,index)=><>
        <div   data-aos="fade-up"
     data-aos-duration="3000" key={index} className="mt-3 col-lg-3 col-md-4 parent-servise mb-5">
              <NavLink to={`servicesdetails/${i.id}`}>

              <div className="items text-center">
                   <div className="icons-services m-auto mb-3">
                    <img  src={i.imgUrl} className='w-100'/>
                   </div>
                   <h3 className='h5'>{i.title}</h3>
               </div>
              </NavLink>
           </div>
      </>)}
     

                   </div>}
                 </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default Services


// 





