import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Message = () => {
       // aos for animation with scroll
       AOS.init({
        duration: 2000,
        once: false
    });
    return (
        <>
            <div className="Message mt-5 py-5">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-6 px-lg-0 px-sm-4 px-4">
                            <div className="items">
                                <h1 className=' fw-bolder mb-5 about-header'>رؤيتنا <sapn className="text-dark">و</sapn> رسالتنا </h1>

                                <div className='mb-3'>
                                    <h3 className='fw-bolder'>رؤيتنا :</h3>

                                    <p className='fw-bolder text-black-50 mt-3 '>
                                        الانطلاق للرياده والتميز في عالم التكنولوجيا وتقديم خدمات متكامله من بدء المشروع حتي نهايته مع كسب  ثقه العملاء
                                    </p>

                                </div>
                                <div className='mb-3'>
                                    <h3 className='fw-bolder'>رسالتنا  :</h3>

                                    <p className='fw-bolder text-black-50 mt-3 '>
                                        منح الالهام والابتكار لكل  صاحب مشروع يريد ان يترقي بمشروعه الي  الاحترافيه والمهنيه المتميزه التي  لا مثيل لها مع توازن الجانب الانفاقي والتمويلي لكل مشروع وبما يتناسب مع متطلبات العملاء واحتياجاتهم وبما يساعدهم علي النمو والتوسيع الراسي والافقي في مجال استثمارهم 

                                    </p>

                                </div>
                                
                            </div>
                        </div>

                        <div className="col-md-6 text-center">
                            <div className="items">
                                <img data-aos="flip-left" src='./images/Poater_into_practice_v2_1200x630-removebg-preview.png' className='w-100' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Message