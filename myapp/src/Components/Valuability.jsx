import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Valuability = () => {
    // aos for animation with scroll
    AOS.init({
        duration: 2000,
        once: false
    });
  return (
    <>
     <div className="Valuability">
         <div className="container pt-5">
         <h1 className=' pe-lg-5 px-sm-4 px-4 fw-bolder mb-2  about-header'>قيمنا </h1>
            <div className="row w-100 px-lg-0 px-4">
                <div data-aos="flip-right" className="col-lg-4 col-md-6 ">
                   <div className="items text-center">
                    <div className="image-valuability mb-3">
                      <img src='./images/281552472304.png' className=' text-center'/>
                    </div>
                    <h3>
                     النزهة 
                    
                    </h3>
                    <p className='fw-bolder text-black-50'>
                    نحترم كل الصفقات والجنسيات والأفكار المختلفة، كما أننا نتعامل بشفافية و نتحلى بالصدق في كلمات نقوم به لأننا نسعى في الاتجاه القويم بالطرق القويمة والإجراءات المستقيمة ونزين أعمالنا.في إطار من الأخلاق والقيم والاعتبارات القانونية.
                    </p>
                   </div>
                </div>

                <div data-aos="flip-right" className="col-lg-4  col-md-6 ">
                   <div className="items text-center">
                    <div className="image-valuability mb-3">
                      <img src='./images/281552472304.png' className=' text-center'/>
                    </div>
                    <h3>
                    التميز والجودة 
                    
                    </h3>
                    <p className='fw-bolder text-black-50'>
                    نحن نضع رضاء عملائنا في إعتبارنا.كأولوية من أولوياتنا الهامة، ونتأكد من أن كل خدمة نقوم بها اتجاه عملاءنا يحقق أعلى معايير الاحترافية والمهنية والجودة.
                    </p>
                   </div>
                </div>

                <div data-aos="flip-right" className="col-lg-4   col-md-6 ">
                   <div className="items text-center">
                    <div className="image-valuability mb-3">
                      <img src='./images/281552472304.png' className=' text-center'/>
                    </div>
                    <h3>
                    التفاني والالتزام                 
                    </h3>
                    <p className='fw-bolder text-black-50'>
                    ولأننا نعتقد اعتقادا  جازما أن التميز والجودة يمكن صقله عن طريق التفاني والالتزام والوفاء مع عملائنا.  
                    </p>
                    <p className='fw-bolder text-black-50'>
                    ويتحلى فريق العمل لدينا المكون من ذوي المهارات العالية بالتفاني والالتزام لتحقيق رؤيتنا المشتركة. 
                    </p>
                   </div>
                </div>

                <div  data-aos="flip-right" className="col-lg-4 my-3   col-md-6 ">
                   <div className="items text-center">
                    <div className="image-valuability mb-3">
                      <img src='./images/681552472272.png' className=' text-center'/>
                    </div>
                    <h3>
                    التعامل الراقي مع الجميع            
                    </h3>
                    <p className='fw-bolder text-black-50'>
                    نحن أبرمنا عهدا على أنفسنا والتزمنا جديا على أن نتعامل تعاملا راقيا مع الجميع، الأفراد--  موظفين ،عملائنا، موردنا، شركائنا وكل من يتعامل أو يتفاعل معنا. 
                    </p>
                    
                   </div>
                </div>

                
                <div data-aos="flip-right" className="col-lg-4  my-3 col-md-6 ">
                   <div className="items text-center">
                    <div className="image-valuability mb-3">
                      <img src='./images/831552472154.png' className=' text-center'/>
                    </div>
                    <h3>
                    الاحتراف والدقة
                    </h3>
                    <p className='fw-bolder text-black-50'>
                    العمل باحترافية عالية
                    </p>
                    <p className='fw-bolder text-black-50'>
                    ، الالتزام بمواعيد التسليم والمواصفات الفنية في الوقت المحدد المتفق عليه.
                    </p>
                   </div>
                </div>
            </div>

         </div>
     </div>
    
    </>
  )
}

export default Valuability