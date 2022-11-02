import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {


    // aos for animation with scroll
    AOS.init({
        duration: 4000,
        once: false
    });

    return (
        <>
            <div className="about mt-5 py-5">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-6 px-lg-0 px-sm-4 px-4">
                            <div className="items">
                                <h1 className=' fw-bolder mb-5 about-header'>من نحن </h1>

                                <h3 className='fw-bolder'>عن الخيل الاسود:</h3>

                                <p className='fw-bolder text-black-50 mt-3 '>مؤسسه الخيل الاسود هي  مؤسسه جمعت بين الاصاله والحداثه والابداع وبين موائمه التكنولوجيا المتسارعه في تحديثاتها ومواكبه تقنيات العصر الحديث والذوق الرفيع وبين والابتكار والخبرات المتميزه في مجال الدعايه والاعلان والاستشارات الاداريه والماليه لسنوات عديده تتجاوز العشرين عاما علي المستوي الداخلي المحلي لفريق العمل وعلي المستوي الخارجي الدولي حيث لديها كثير من شركاء النجاح وشراكات عديده دوليه مع شركات في الوطن العربي
                                </p>


                                <div class="ceter-button mt-4">
                                    <button class="glow-on-hover" type="button">قراءه المزيد</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 text-center">
                            <div className="items">
                                <img data-aos="fade-up"
     data-aos-duration="3000" src='./images/creative-team-concept-illustration_114360-6488.webp' className='w-100' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About