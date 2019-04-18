<template>
	<div id="app">
		

		<!-- default -->
		<div class="app">

			
			<div :class="slideClass">

				<!-- main menu -->
				<div class="slide-content background-blue change-scrollbar">

					<div class="padding-top-20px">
						<div class="grid grid-2x">
							<div class="col-1">
								<h1 class="txt-site txt-white txt-upp txt-bold post-center margin-left-10px">
									DDMS
								</h1>
							</div>
							<div class="col-2 content-right app-mobile">
								<button 
									class="btn btn-black btn-circle" 
									@click="openSlideMenu()">
									<i class="fa fa-lg fa-times"></i>
								</button>
							</div>
						</div>
					</div>

					<div class="padding-10px">
					
						<div class="app-space">
							NAVIGATION
						</div>

						<ul class="app-menu">

							<li class="content" @click="openSlideMenu()">
								<router-link to="/dashboard">
									<div class="list active">
										<div class="icn">
											<i class="fa fa-lg fa-tachometer-alt"></i>
										</div>
										<div class="ttl">
											Dashboard
										</div>
									</div>
								</router-link>
							</li>

							<li class="content">
								
								<div :class="listApps" @click="openMenuApps()">
									<div class="icn">
										<i class="fa fa-lg fa-th"></i>
									</div>
									<div class="ttl">
										Apps
									</div>
									<div class="icn txt-site txt-right txt-12">
										<i class="fa fa-lg fa-angle-right"></i>
									</div>
								</div>

								<!-- submenu -->
								
								<ul class="app-menu app-submenu" v-if="menuApps">
									<li class="content" v-for="(item, index) in 3" :key="index" @click="openSlideMenu()">
										<router-link to="/apps">
											<div class="list">
												<div class="icn"></div>
												<div class="ttl">
													Apps Submenu
												</div>
												<div class="icn txt-site txt-right txt-12"></div>
											</div>
										</router-link>
									</li>
								</ul>

							</li>

							<li class="content">
								<div :class="listPages" @click="openMenuPages()">
									<div class="icn">
										<i class="far fa-lg fa-file"></i>
									</div>
									<div class="ttl">
										Pages
									</div>
									<div class="icn txt-site txt-right txt-12">
										<i class="fa fa-lg fa-angle-right"></i>
									</div>
								</div>

								<!-- submenu -->
								
								<ul class="app-menu app-submenu" v-if="menuPages">
									<li class="content" v-for="(item, index) in 3" :key="index" @click="openSlideMenu()">
										<router-link to="/pages">
											<div class="list">
												<div class="icn"></div>
												<div class="ttl">
													Pages Submenu
												</div>
												<div class="icn txt-site txt-right txt-12"></div>
											</div>
										</router-link>
									</li>
								</ul>

							</li>

						</ul>

						<div class="app-space">
							COMPONENTS
						</div>

						<ul class="app-menu">

							<li class="content" v-for="(item, index) in 8" :key="index" @click="openSlideMenu()">
								<router-link to="/components">
									<div class="list">
										<div class="icn">
											<i class="fa fa-lg fa-th"></i>
										</div>
										<div class="ttl">
											Component {{ item }}
										</div>
										<!-- <div class="icn txt-site txt-right txt-12">
											<i class="fa fa-lg fa-angle-right"></i>
										</div> -->
									</div>
								</router-link>
							</li>

						</ul>
					</div>

				</div>
				<!-- End Main Menu -->




			</div>



			<div class="app-main">

				<div class="app-panel">
					<div class="panel-content">
						<div class="col-1">

							<button 
								class="btn btn-grey app-mobile" 
								@click="openSlideMenu()">
								<i class="fa fa-lg fa-bars"></i>
								<span 
									class="txt-site txt-14 txt-main-color txt-bold">
									Menu
								</span>
								
							</button>

							<form action="#" class="app-desktop">
								<div class="input-group">
									<input 
										type="text" 
										class="txt txt-main-color txt-trans-color" 
										placeholder="Search .."
										required>
									<button 
										class="btn btn-no-radius btn-blue icn"
										type="submit">
										<i class="fa fa-lg fa-search"></i>
									</button>
								</div>
							</form>

						</div>
						<div class="col-2">

							<button class="btn btn-grey btn-circle">
								<span class="btn-notif">2</span>
								<i class="far fa-lg fa-bell"></i>
							</button>
							

							<div 
								class="app-small-profile" 
								style="float: right;"
								@click="openMenuPopup()">
								<div class="asp-col-1">
									<div class="image image-circle image-30px"></div>
								</div>
								<div class="asp-col-2">
									<div class="ttl">
										<div class="txt-site txt-main txt-12">
											Ganjar hadiatna
										</div>
										<!-- <div class="txt-site txt-primary txt-9">
											Founder
										</div> -->
									</div>
								</div>
							</div>

							<div
								style="top: 45px;" 
								class="app-menu-popup" 
								v-if="menuPopup">
								<ul>
									<li @click="openMenuPopup()">
										<i class="far fa-lw fa-user"></i>
										Akun
									</li>
									<li @click="openMenuPopup()" class="border-bottom">
										<i class="fa fa-lw fa-cog"></i>
										Pengaturan
									</li>
									<router-link to="/">
										<li @click="openMenuPopup()">
											<i class="fa fa-lw fa-power-off"></i>
											Logout
										</li>
									</router-link>
								</ul>
							</div>

						</div>
					</div>
				</div>

				<router-view/>

				<div class="app-footer">
					<div class="txt-site txt-11 txt-primary txt-thin">
						2018 - 2019 @ Bitozen - Themes
					</div>
					<!-- <div class="grid grid-2x">
						<div class="column-1">
							<div class="txt-site txt-11 txt-primary txt-thin">
								2018 - 2019 @ Bitozen - Themes
							</div>
						</div>
						<div class="column-2"></div>
					</div> -->
				</div>

			</div>

		</div>

		<!-- secondary -->
		<router-view name="second" />
		<router-view name="three" />

	</div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			slideClass: 'app-slide app-slide-mobile',
			slideMenu: false,
			menuPopup: false,
			menuApps: false,
			menuPages: false,
			menuLayouts: false,
			listApps: 'list',
			listPages: 'list',
			listLayouts: 'list',
		}
	},
	methods: {
		openSlideMenu () {
			if (this.slideClass == 'app-slide app-slide-mobile') {
				this.slideClass = 'app-slide'
			} else {
				this.slideClass = 'app-slide app-slide-mobile'
			}
		},
		openMenuPopup () {
			if (this.menuPopup == false) {
				this.menuPopup = true
			} else {
				this.menuPopup = false
			}
		},
		openMenuApps () {
			if (this.menuApps == false) {
				this.menuApps = true
				this.listApps = 'list active'
			} else {
				this.menuApps = false
				this.listApps = 'list'
			}
		},
		openMenuPages () {
			if (this.menuPages == false) {
				this.menuPages = true
				this.listPages = 'list active'
			} else {
				this.menuPages = false
				this.listPages = 'list'
			}
		},
		openMenuLayouts () {
			if (this.menuLayouts == false) {
				this.menuLayouts = true
				this.listLayouts = 'list active'
			} else {
				this.menuLayouts = false
				this.listLayouts = 'list'
			}
		}
	},
}
</script>

<style>
	/*@import url('./assets/icons/fontawesome/css/all.min.css');*/
	@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');
	@import url('./assets/sass/app.css');
</style>
