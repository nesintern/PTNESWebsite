class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
    this.innerHTML = `<footer class="site-footer footer-large footer-dark text-white footer-style3" style="display: block; height: 416px;">
					<!-- FOOTER BLOCKES START -->  
					<div class="footer-top">
						<div class="container">
							<div class="row">
																	<div id="about-2" class="col-lg-3 col-md-6 col-sm-12 widget_about industroz-widget"><div class="widget footer-widget">	
			
			<div class="logo-footer clearfix">
				<a href="https://ptnes.net/">
					<img src="index_files/PT-Nes-logo-putih.png" alt="img">
				</a>
			</div>
			<p>PT NES is dedicated to be a Specialty Solutions Provider</p>
							<ul class="social">
											<li><a class="social-icon-footer-custom grid-small grid-linkedin" href="https://www.linkedin.com/company/pt-national-energy-solutions/mycompany/"><i class="fa fa-linkedin-square"></i></a></li>
												<li><a class="social-icon-footer-custom grid-small grid-instagram" href="https://www.instagram.com/nesgroup_official?igsh=NTE2YXA3aXRvbm84"><i class="fa fa-instagram"></i></a></li>
										</ul>
						</div></div><div id="nav_menu-4" class="col-lg-3 col-md-6 col-sm-12 widget_nav_menu industroz-widget"><div class="widget footer-widget"><h3 class="widget-title">Projects</h3><div class="menu-projects-new-home-container"><ul id="menu-projects-new-home" class="menu"><li id="menu-item-726" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-726"><a href="https://ptnes.net/projects/industry-complex/">Industry Complex</a></li>
<li id="menu-item-727" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-727"><a href="https://ptnes.net/projects/oil-pipeline-project/">Oil Pipeline Project</a></li>
<li id="menu-item-728" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-728"><a href="https://ptnes.net/projects/gear-manufacturing/">Gear Manufacturing</a></li>
<li id="menu-item-729" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-729"><a href="https://ptnes.net/projects/machine-engineering/">Machine Engineering</a></li>
<li id="menu-item-730" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-730"><a href="https://ptnes.net/projects/warehouse-industry/">Warehouse Industry</a></li>
<li id="menu-item-731" class="menu-item menu-item-type-post_type menu-item-object-projects menu-item-731"><a href="https://ptnes.net/projects/gothia-mining-factory/">Gothia Mining Factory</a></li>
</ul></div></div></div><div id="nav_menu-6" class="col-lg-3 col-md-6 col-sm-12 widget_nav_menu industroz-widget"><div class="widget footer-widget"><h3 class="widget-title">Services</h3><div class="menu-services-new-home-container"><ul id="menu-services-new-home" class="menu"><li id="menu-item-735" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-735"><a href="https://ptnes.net/services/we-fight-pollution/">We Fight Pollution</a></li>
<li id="menu-item-736" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-736"><a href="https://ptnes.net/services/oil-pump/">Oil Pump</a></li>
<li id="menu-item-737" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-737"><a href="https://ptnes.net/services/thermal-power/">Thermal Power</a></li>
<li id="menu-item-738" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-738"><a href="https://ptnes.net/services/oil-resources/">Oil Resources</a></li>
<li id="menu-item-741" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-741"><a href="https://ptnes.net/services/oil-factory/">Oil Factory</a></li>
<li id="menu-item-999" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-999"><a href="https://ptnes.net/services/chemical-analysis/">Chemical Analysis</a></li>
</ul></div></div></div><div id="contact_info-2" class="col-lg-3 col-md-6 col-sm-12 widget_contact_info industroz-widget"><div class="widget footer-widget"><h3 class="widget-title">Contact Us</h3>		
		<div class="contact-footer-widget">
							<div class="industroz-contact"><i class="fa fa-map-marker"></i>Jl. Letjen S. Parman No.Kav 77, RT.6/RW.3, 3, Slipi, Jakarta Barat</div>
							
							<div class="industroz-contact"><i class="fa fa-envelope-o"></i>
											<a href="mailto:info@ptnes.net"> info@ptnes.net</a>
															</div>
							<div class="industroz-contact"><i class="fa fa-phone"></i>
									<a href="tel:(021) 5363070">(021) 5363070</a>
												</div>
		</div>
		</div></div>                              
																</div> 
						</div>
					</div>
					<!-- FOOTER COPYRIGHT -->
					
					<div class="footer-bottom">
						<div class="container">
							<div class="wt-footer-bot-left d-flex justify-content-between">
								<span class="copyrights-text">Copyright © 2024 PT National Energy Solutions</span>
								<ul id="menu-footer-links" class="copyrights-nav"><li id="menu-item-229" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-229"><a rel="privacy-policy" href="https://ptnes.net/privacy-policy/">Privacy Policy</a></li>
<li id="menu-item-230" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-230"><a href="https://ptnes.net/contact-us/">Contact Us</a></li>
</ul>   
							</div>
						</div>   
					</div>  
				</footer>
				<!-- FOOTER END -->
						</div>
			`;
}
}
customElements.define('footer-component', Footer);
