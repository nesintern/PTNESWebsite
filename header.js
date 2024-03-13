class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="site-header header-style-2 inner-pages-header mobile-sider-drawer-menu">
									<div class="top-bar site-bg-secondry">
						<div class="container">

							<div class="d-flex justify-content-between">
								<div class="wt-topbar-left d-flex flex-wrap align-content-start">
									
									<ul class="wt-topbar-info e-p-bx text-white">
										<li>Monday - Friday 8AM -5PM</li>
									</ul>
								</div>
								
								<div class="wt-topbar-right d-flex flex-wrap align-content-center">
									<ul class="wt-topbar-info-2 e-p-bx text-white">
										<li><i class="fa fa-phone"></i>(+6221) 5363070</li>
										<li><i class="fa fa-envelope"></i>info@nesgroup.id</li>
									</ul> 
					
									<ul class="social-icons">
																					<li><a href="https://www.linkedin.com/company/pt-national-energy-solutions/mycompany/" class="fa fa-linkedin"></a></li>
																						<li><a href="https://www.instagram.com/nesgroup_official?igsh=NTE2YXA3aXRvbm84" class="fa fa-instagram"></a></li>
																				</ul> 
								</div>
							</div>
						</div>
					</div> 
			<div class="sticky-wrapper" style="height: 100px;"><div class="sticky-header main-bar-wraper navbar-expand-lg is-fixed color-fill">
					<div class="main-bar">                       
						<div class="container clearfix"> 
							<div class="logo-header">
								<div class="logo-header-inner logo-header-one">
									<a href="https://ptnes.net/">
										<img src="index_files/PT-Nes-logo-warna.png" alt="PT National Energy Solutions">
									</a>
								</div>
							</div>  
							
							<!-- NAV Toggle Button -->
							<button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar icon-bar-first"></span>
								<span class="icon-bar icon-bar-two"></span>
								<span class="icon-bar icon-bar-three"></span>
							</button> 
							<div class="extra-nav header-2-nav">
								<div class="extra-cell">
																	</div>
							</div>                                                                       

							<!-- MAIN Vav -->
							<div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
								<ul id="menu-main-menu" class="nav navbar-nav"><li id="menu-item-922" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-922"><a href="index.html">Home</a></li>
<li id="menu-item-34" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-34 has-child"><a>Our Company</a><div class="fa fa-angle-right submenu-toogle"></div>
<ul class="sub-menu">
	<li id="menu-item-332" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-332"><a href="AboutPTNES.html">About us</a></li>
	<li id="menu-item-343" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-343"><a href="VisiMisiPTNES.html">Vision &amp; Mission</a></li>
</ul>
</li>
<li id="menu-item-35" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-35 has-child"><a>Projects</a><div class="fa fa-angle-right submenu-toogle"></div>
<ul class="sub-menu">
	<li id="menu-item-344" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-344"><a href="ProjectPTNES.html">Our Projects</a></li>
	<li id="menu-item-342" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-342"><a href="ClientsPTNES.html">Our Clients</a></li>
	<li id="menu-item-376" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-376"><a href="ClientsAndProjectsPTNES.html">Clients &amp; Projects</a></li>
</ul>
</li>
<li id="menu-item-356" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-356"><a href="https://ptnes.net/our-team/">Affiliates</a></li>
<li id="menu-item-369" class="menu-item menu-item-type-post_type menu-item-object-page page-item-361 "><a href="https://ptnes.net/blog-grid/" aria-current="page">News &amp; Article</a></li>
<li id="menu-item-1104" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1104"><a href="#">Certificates</a></li>
<li id="menu-item-158" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-158"><a href="ContactPTNES.html">Contact Us</a></li>
</ul>
							</div>
													</div>    
					</div>  
				</div></div>
				
			</header>`;
}
}
customElements.define('header-component', Header);
