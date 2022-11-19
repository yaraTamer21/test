import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Goals = () => {
    // aos for animation with scroll
    AOS.init({
        duration: 2000,
        once: false
    });
    return (
        <>

            <div className="Goals mt-5 py-5">
                <div className="container">
                    <div className="row w-100 align-items-center">
                        <h1 className=' px-lg-0 px-sm-4 px-4 fw-bolder mb-5 about-header'>اهدافنا </h1>


                        <div className="col-md-6">
                            <div className="items">
                                <img data-aos="zoom-out-left" src='./images/goals-clipart-realistic-goal-9-removebg-preview.png' className='w-75' />

                            </div>
                        </div>


                        <div className="col-md-6 px-lg-0 px-sm-4 px-4">
                            <div className="items">

                                <h3 className='fw-bolder'>اهداف شركة  الخيل الاسود:</h3>

                                <p className='fw-bolder text-black-50 mt-3 '>
                                    اقامة علاقات قوية مع عملائنا وشراكة استراتيجية طويلة حيث تكون مؤسستنا هي الخيار الاول في مجال الدعاية والاعلان والاستشارات الادارية والمالية لاصحاب الاستثمارات داخل المملكة العربية السعودية وخارجها  
                                </p>


                                <div class="ceter-button mt-4">
                                    <button class="glow-on-hover" type="button">قراءة المزيد</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Goals