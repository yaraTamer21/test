import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// to control in the next arrow
const NextArrow = (props) => {
    
  const { onClick } = props;
  return (<>
      <div className='control' onClick={onClick}>
          <button className='bottons-control-next'>
          <i class="fa-solid fa-angles-right"></i>   
          
                 </button>
      </div>

  </>)

}
// to control in the next arrow

const PrevArrow = (props) => {
    
  const { onClick } = props;
  return (<>
      <div className='control' onClick={onClick}>
          <button className='bottons-control-prev'>
          <i class="fa-solid fa-angles-left"></i>   
          </button>
      </div>

  </>)

  

}
const Sliders = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        appendDots:(dots)=>{
          return <ul style={{margin:"0"}}>{dots}</ul>
  
        },
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };
  return (

    <>
      <Slider  {...settings}>
        <div>
          <img src='./images/1_ojUJEVinKc7nDocdr4m3Bw.jpg' className='w-100'/>
        </div>
        <div>
          <img src='./images/b33b7f91319d908248b97eb7210def3b.jpg' className='w-100'/>
        </div>
        <div>
          <img src='./images/Aaaaaaa.jpg' className='w-100'/>
        </div>

      </Slider>
    </>
  )
}

export default Sliders