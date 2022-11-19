import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
	// aos for animation with scroll
	AOS.init({
		duration: 2000,
		once: false
	});

	return (
		<>
			<footer >
				<div class="container">
					<div data-aos="fade-up"
						data-aos-anchor-placement="top-bottom" class="row w-100 px-4 px-lg-0 ">
						<div class="col-lg-3 col-md-12">
							<div class="box-footer">
								<div class="logo-footer">
									<img src="/images/WhatsApp_Image_2022-10-30_at_12.35.47_AM-removebg-preview.png" alt="" />
									<p className="ps-3">
										مؤسسة الخيل الاسود هي مؤسسة جمعت بين الاصالة والحداثة والابداع وبين موائمة التكنولوجيا المتسارعة في تحديثاتها ومواكبة تقنيات العصر الحديث والذوق الرفيع وبين والابتكار والخبرات المتميزة في مجال الدعاية والاعلان والاستشارات الادارية والمالية لسنوات عديدة تتجاوز العشرين عاما علي المستوي الداخلي المحلي لفريق العمل وعلي المستوي الخارجي الدولي حيث لديها كثير من شركاء النجاح وشراكات عديدة دولية مع شركات في الوطن العربي


									</p>
									<ul>
										<li><a href="https://www.facebook.com/profile.php?id=100087437136721" target='_blanck'><i class="fab fa-facebook-f"></i> </a></li>
										<li><a href="https://twitter.com/home"  target='_blanck'><i class="fab fa-twitter"></i> </a></li>
										<li><a href="#"><i class="fab fa-youtube"></i> </a></li>
										<li><a href="#"><i class="fab fa-instagram"></i> </a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="box-link-web">
								<h3> روابط سريعة</h3>
								<ul>
									<li><NavLink to="/"> الرئيسية</NavLink></li>
									<li><NavLink to="/about"> من نحن</NavLink></li>
									<li><a href="#"> عملائنا </a></li>
									<li><a href="#"> تواصل معنا</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="box-link-web">
								<h3>الخدمات</h3>
								<div class="row">
									<div class="col-lg-6 col-md-6">
										<ul>
											<li><a href="#">الخدمات المالية</a></li>
											<li><a href="#"> الخدمات التجارية </a></li>
											<li><a href="#">   خدمات القيمة المضافة
</a></li>
											<li><a href="#"> التصوير التجارى والسياحى
 </a></li>
										</ul>
									</div>
									{/* <div class="col-lg-6 col-md-6">
							<ul>
								<li><a href="#"> Website Design </a></li>
								<li><a href="#"> Website Design </a></li>
								<li><a href="#"> Website Design </a></li>
								<li><a href="#"> Website Design </a></li>
								<li><a href="#"> Website Design </a></li>
							</ul>
						</div> */}
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="box-link-web">
								<h3>فروعنا</h3>
								<ul class="soch">
									<li><a href="#"> السعودية   <span>    966565821156+

</span></a></li>
									<li><a href="#"> الجوف    <span>    966565821156+

</span></a></li>
									

								</ul>
							</div>
						</div>
					</div>
					<div class="Copy">
						Copyright 2018 Black Hourse, All Rights Reserved
					</div>
				</div>

				{/* <img class="img-footer" src="customize/frontend/images/footer/cloud-bg-df.png" alt=""/> */}

			</footer>
		</>
	)
}

export default Footer