import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
     // aos for animation with scroll
     AOS.init({
        duration: 2000,
        once: false
    });

  return (
    <div className="contact py-5 mt-5">
        <div className="container">
            <div className="row w-100 align-items-center">
                <div className="col-md-6">
                    <div className="items">
                        <h2 className='fw-bolder  pe-3 pe-lg-0'>طلب خدمه سريع</h2>
                        <form className='text-center mt-4 pe-lg-0  pe-3 ps-4'>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="item mb-3 mb-lg-0">
                                    <input type='text' placeholder='الاسم' className='form-control'/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="item  mb-3 mb-lg-0">
                                    <input type='number' placeholder='التليفون ' className='form-control'/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="item  mb-3 mb-lg-0">
                                    <input type='email' placeholder='البريد الالكتروني' className='form-control'/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="item  mb-3 mb-lg-0">
                                    <input type='number' placeholder='التليفون ' className='form-control'/>
                                </div>
                            </div>
                        </div>
                        <textarea placeholder='رساله' className='w-100 form-control mt-3'></textarea>
                        <div class="ceter-button mt-4">
                                    <button class="glow-on-hover w-100 fw-bolder fs-4" type="button"> ارسال</button>
                                </div>

                       </form>
                    </div>
                </div>


                <div className=" mt-lg-0 mt-md-0 mt-4 col-md-6 text-center">
                    <div className="items">
                       <img  data-aos="zoom-in" src='/images/contact-us-showcase.png' className="w-75"/>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact