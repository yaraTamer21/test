import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Mission = () => {

     // aos for animation with scroll
     AOS.init({
        duration: 2000,
        once: false
    });
      
  return (
   <>
 
 <div className="mission">
       
   <div class="waveWrapper waveAnimation">
  <div class="waveWrapperInner bgTop">
    <div class="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
  </div>
  <div class="waveWrapperInner bgMiddle">
    <div class="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
  </div>
  <div class="waveWrapperInner bgBottom">
    <div class="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
  </div>
</div>
<div className="content">
<div className="container py-4">
<h1 className=' pe-lg-5 px-sm-4 px-4 fw-bolder mb-2  about-header'>مهمتنا</h1>
<div className="row px-lg-0 px-4 w-100 align-items-center ">
    <div className="col-md-6">
        <div className="items">
         <p className='fw-bolder text-black-50 mb-3'>
         أن يكون شريكا ذا قيمة عالية لعملاءنا ونوفر لهم خدمات مهنية مبتكرة مع الوفاء والالتزام بإتمام المشاريع على الوقت المتفق عليه، والمواصفات المطلوبة والجودة العالية وضمن الميزانية المتفق عليها
         </p>
         <p className='fw-bolder text-black-50 mb-3'>
         تحقيق النمو من خلال استثمار الفرص، وخلق التكاملات، والعمل بمسؤولية موثوقة لتحقيق الرخاء لشركائنا وموظفينا ومجتمعنا
         </p>
        </div>
    </div>
    <div className="col-md-6 ">
        <div className="items">
            <img  data-aos="flip-left" src='./images/397cd3e3-b2f1-42f8-80b0-fe2f7d92f17a-removebg-preview.png' className='w-75'/>
        </div>
    </div>
</div>
</div>
</div>
 </div>



   </>
  )
}

export default Mission