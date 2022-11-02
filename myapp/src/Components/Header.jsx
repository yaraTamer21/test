import React  from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {


               

    
  return (
     <>

      <div className="parent">
      <div class="container container-parent">
 

{/* tabbar */}
<div class="headerwp clearfix">
		<div class="container min-nav">
			<div class="row align-items-center ">
				<div class="col-lg-4 number-tapbar col-md-6 col-12 col-sm-4">
					<div class="loc-heder">
						<p>
							<i class="fas fa-mobile-alt"></i>
						 <span className='fw-bolder'>
                         966565821156+
                            </span>					</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-6 col-sm-4">
					<div class="desktoplogo clearfix">
						<NavLink to="/"><img src="./images/WhatsApp_Image_2022-10-30_at_12.35.47_AM-removebg-preview.png"  alt=""/></NavLink>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-6 col-sm-4">
					<div class="social-media">
						<ul>
							<li><a href="#"><i class="fab fa-facebook-f"></i> </a></li>
							<li><a href="#"><i class="fab fa-twitter"></i> </a></li>
							<li><a href="#"><i class="fab fa-youtube"></i> </a></li>
							<li><a href="#"><i class="fab fa-instagram"></i> </a></li>
							<li><a href="#"><i class="fas fa-language"></i> </a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>


	</div>

 {/* navbar */}

<div className="navbars">
<div class="top-navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="./images/WhatsApp_Image_2022-10-30_at_12.35.47_AM-removebg-preview.png" className='image-navbar-reponsive'  alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">

          <li class="nav-item">
              <NavLink class="nav-link links-header" to="/"><i class="fa-solid fa-house ms-2"></i>الرئيسيه</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link links-header" to="/about"><i class="fa-regular fa-address-book ps-2"></i>عملائنا</NavLink>
            </li>




            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa-solid fa-bars"></i>    الخدمات
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">الخدمه الاولي</a>
                <a class="dropdown-item" href="#">الخدمه التانيه</a>
                <a class="dropdown-item" href="#"> الخدمه التالته</a>
                <a class="dropdown-item" href="#"> الخدمه الربعه </a>
                <a class="dropdown-item" href="#"> الخدمه الخامسه</a>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-regular fa-address-book ps-2"></i>عملائنا</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa-solid fa-bars"></i>    اعمالنا
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"> العمل الاول</a>
                <a class="dropdown-item" href="#"> العمل  التاني </a>
                <a class="dropdown-item" href="#">العمل  التالت </a>
                <a class="dropdown-item" href="#">العمل  الرابع </a>
              </ul>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fa-brands fa-telegram ms-2"></i>التواصل معنا</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </div>

</div>








</div>
      </div>


     </>
  )
}

export default Header