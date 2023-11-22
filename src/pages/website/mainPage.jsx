import React from 'react'

const mainPage = () => {
  return (
  <>

    
    <div class="wrapper" id="o2-page-wrapper">
     
        <div class="header-logout-msg hide-my-o2 hide">
            <p class="header-logout-msg-txt">
                <img src="https://www.o2-billing.net/library/img/icons.png" alt="O2" class="tickImg" /> You have been
                successfully logged out
            </p>
        </div>
        <div class="emptydiv hide-my-o2 hide"></div>
        <!-- Logout Message Twig -->
        <div component-name="globalNav" class="globalNavConsumerWrapper" data-qa-globalnav-section="">
            <header class="newConsumer" data-qa-newconsumer="">
                <div class="topBar">
                    <div class="navContainer">
                        <div class="basketLink basketMobile">
                            <a class="basketUrl" href="https://www.o2.co.uk/shop/basket"></a>
                        </div>
                        <!-- Top Strip (Personal/Business) menu -->
                        <ul class="categoryList" data-qa-categorylist="">
                            <li class="current" data-qa="current" aria-label="Personal"> Personal </li>
                            <li class="pipe" aria-hidden="true">|</li>
                            <li class="" data-qa="" aria-label="Business">
                                <a href="https://www.o2.co.uk/business" manual_cm_re="header-_-Business-_-na"
                                    tabindex="1">Business</a>
                            </li>
                        </ul>
                        {/* <!-- Top Strip (Personal/Business) menu --> */}
                        <ul class="signUpLinks" data-qa-signuplinks="">
                            <li id="header-tool-signin">
                                <div class="hideWhenSignedOut welcome" style="display: none;"> Hi
                                    {/* <!-- SessionCam:Hide --> */}
                                    <span class="username"></span>
                                    {/* <!-- /SessionCam:Hide --> */}
                                </div>
                                <div class="hideWhenSignedIn">
                                    <a class="signInLink" data-qa-signinlink="" href="https://accounts.o2.co.uk/signin"
                                        title="Sign In" manual_cm_re="header-_-Sign In-_-na" tabindex="2">Sign in</a>
                                </div>
                                <div class="hideWhenSignedOut" style="display: none;">
                                    <span>|</span>
                                    <a class="signOutLink" data-qa-signoutlink=""
                                        href="https://identity.o2.co.uk/logout" title="Sign out of your account"
                                        manual_cm_re="header-_-Sign out-_-na" tabindex="2">Sign out</a>&nbsp;
                                </div>
                                <div class="hideWhenSignedIn"> or <a class="registerLink"
                                        href="https://accounts.o2.co.uk/register" title="register"
                                        manual_cm_re="header-_-Register-_-na" tabindex="2">Register</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class="globalNav" data-qa-globalnav-bar="" role="navigation">
                    <div class="tier1">
                        <div class="navContainer">
                            <div class="brandLogo">
                                <a data-qa-brandlogo="" href="https://www.o2-billing.net/"
                                    manual_cm_re="header-_-Telefonica-_-na" tabindex="3">
                                    <!--[if gte IE 9]>
																																					<!-->
                                    <!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="34px" height="35px" viewBox="0 0 34 35" version="1.1">
                                        <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                                        <title>O2 Logo</title>
                                        <desc> Created with Sketch. </desc>
                                        <defs>
                                            <polygon id="path-1"
                                                points="0 28.5963489 0 0.0563479784 26.7030678 0.0563479784 26.7030678 28.5963489 3.5407696e-15 28.5963489">
                                            </polygon>
                                        </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Artboard">
                                                <g id="o2-logo">
                                                    <g id="Group-3" transform="translate(0.000000, 0.100063)">
                                                        <mask id="mask-2" fill="white">
                                                            <use xlink:href="#path-1"></use>
                                                        </mask>
                                                        <g id="Clip-2"></g>
                                                        <path
                                                            d="M5.145108,14.3262702 C5.145108,9.14206862 8.18067295,4.11812414 13.3773169,4.11812414 C18.5223346,4.11812414 21.5578996,9.14206862 21.5578996,14.3262702 C21.5578996,19.1898012 19.0369417,24.5344163 13.3773169,24.5344163 C7.66621634,24.5344163 5.145108,19.1898012 5.145108,14.3262702 M-6.02055707e-05,14.3262702 C-6.02055707e-05,22.1294646 5.45381207,28.5963489 13.3773169,28.5963489 C21.249346,28.5963489 26.7030678,22.1294646 26.7030678,14.3262702 C26.7030678,6.04230441 21.352147,0.0563479784 13.3773169,0.0563479784 C5.35086054,0.0563479784 -6.02055707e-05,6.04230441 -6.02055707e-05,14.3262702"
                                                            id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
                                                    </g>
                                                    <path
                                                        d="M33.9007041,34.809417 L33.9007041,32.9072819 L29.1563545,32.9072819 C31.0540342,30.9705938 33.5343532,28.6188005 33.5343532,26.0596892 C33.5343532,23.6906976 32.1028152,22.5321557 29.8889058,22.5321557 C28.7067694,22.5321557 27.4916705,22.8432891 26.4428894,23.3966062 L26.6260648,25.4025567 C27.3917292,24.8837926 28.3240125,24.4342908 29.3062664,24.4342908 C30.2549557,24.4342908 31.203946,24.9528986 31.203946,26.0596892 C31.203946,28.2729577 27.2585244,31.6968323 26.1766302,32.7862682 L26.1766302,34.809417 L33.9007041,34.809417 Z"
                                                        id="Fill-4" fill="#FFFFFF"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>


                                </a>
                                <span class="accordionToggle">
                                    <img src="https://www.o2-billing.net/library/img/arrowbig.png" alt="O2">
                                </span>
                            </div>
                            <div class="globalNavlinksWrapper">
                                <ul class="linksDesktop" data-qa-globalnavlinks="">
                                    <li name="Shop">
                                        <a manual_cm_re="meganav_Shop-_-na-_-na" data-parent="tier1-shop"
                                            data-parent-url="/shop" target="_self" href="https://www.o2.co.uk/shop"
                                            tabindex="4">Shop</a>
                                    </li>
                                    <li class="hideMobile" name="Why-O2">
                                        <a manual_cm_re="meganav_Why O2-_-na-_-na" data-parent="tier1-why-o2"
                                            data-parent-url="/why-o2" target="_self" href="https://www.o2.co.uk/why-o2"
                                            tabindex="4">Why O2</a>
                                    </li>
                                    <li name="Help">
                                        <a manual_cm_re="meganav_Help-_-na-_-na" data-parent="tier1-help"
                                            data-parent-url="/help" target="_self" href="https://www.o2.co.uk/help"
                                            tabindex="4">Help</a>
                                    </li>
                                </ul>
                                <ul class=" otherLinks" data-qa-globalnav-otherlinks="">
                                    <li class="myO2Link" data-qa-myo2link="">
                                        <a manual_cm_re="meganav_My O2-_-na-_-na" href="https://mymobile.o2.co.uk/"
                                            id="myO2Linkclick" tabindex="5">
                                            <span class="colorSpan">My O2</span>
                                            <!--  <span class="myO2Linkclick">^</span> -->
                                        </a>
                                    </li>
                                    <li class="searchLink open-overlay" tabindex="5" data-qa-searchlink="" role="link">
                                        <span class="ico o2-ico-search global-nav-white"></span>
                                        <span class="hideMobile search-text">Search</span>
                                    </li>
                                    <li class="basketLink hideMobile" data-qa-basketlink="">
                                        <a class="basketUrl" href="https://www.o2.co.uk/shop/basket" tabindex="5">
                                            <span class="svgHide">
                                                <!--[if gte IE 9]>
																																									<!-->
                                                <!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 20"
                                                    version="1.1">
                                                    <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
                                                    <title>Your Basket</title>
                                                    <desc> Created with Sketch. </desc>
                                                    <defs></defs>
                                                    <g id="Symbols" stroke="none" stroke-width="1" fill="none"
                                                        fill-rule="evenodd" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <g id="desktop-tier-1-v1"
                                                            transform="translate(-967.000000, -48.000000)"
                                                            stroke="#FFFFFF" stroke-width="1.2">
                                                            <g id="Group-2"
                                                                transform="translate(882.000000, 49.000000)">
                                                                <g id="icons">
                                                                    <path
                                                                        d="M100.94933,7.29932475 L98.3505135,0.646655413 C98.1987114,0.278223254 97.8542023,0 97.4487906,0 L96.2125576,0 C95.783512,0.000949567419 95.4117331,0.276324119 95.2572039,0.666596328 L92.5583981,7.29932475 L106.617822,7.29932475 C107.201397,7.29932475 107.674074,7.79309981 107.674074,8.40177253 C107.674074,8.58503904 107.631351,8.75691074 107.556814,8.90884153 L104.440779,16.577548 C103.970829,17.4283604 103.090922,18 102.082847,18 L91.5848646,18 C90.5904242,18 89.7177891,17.4407048 89.2423848,16.606035 L86.1190783,8.9126398 C86.0427228,8.75975944 86,8.58693817 86,8.40177253 C86,7.79309981 86.4717683,7.29932475 87.0544341,7.29932475 L90.1741045,7.29932475"
                                                                        id="basket"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <!--
																																									<![endif]-->
                                                <!--[if lte IE 8]>
																																									<img src="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/global/basket@3x.png" alt="Your basket"/>
																																									<![endif]-->
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="tier2" data-qa-tier2="">
                        <div class="navContainer">
                            <div class="linksMobile">
                                <ul class="accordionMobile">
                                    <li>
                                        <a class="mobileAccodLinks" href="javascript:void(0);"
                                            manual_cm_re="meganav_Shop-_-na-_-na">Shop</a>
                                        <ul class="inner">
                                            <li>
                                                <a href="https://www.o2.co.uk/shop"
                                                    manual_cm_re="meganav_Browse Shop-_-na-_-na">Browse Shop</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Phones </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/phones"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-Phones"
                                                    target="_self">Phones</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/upgrade/upgradeOptions"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-Upgrades"
                                                    target="_self">Upgrades</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/iphone"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-Apple iPhone"
                                                    target="_self">Apple iPhone</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/apple/iphone-15"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-iPhone 15" target="">iPhone
                                                    15</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/android"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-Android phones"
                                                    target="_self">Android phones</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/like-new"
                                                    manual_cm_re="meganav_Shop-_-Phones-_-Refurbished phones"
                                                    target="">Refurbished phones</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Tablets, laptops &amp; dongles </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/tablets"
                                                    manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Tablets"
                                                    target="_self">Tablets</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/ipad"
                                                    manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Apple iPad"
                                                    target="_self">Apple iPad</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/android-tablets"
                                                    manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Android tablets"
                                                    target="_self">Android tablets</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/laptops"
                                                    manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Laptops"
                                                    target="_self">Laptops</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/mobile-broadband"
                                                    manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Dongles and mobile wifi"
                                                    target="_self">Dongles and mobile wifi</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Sims and Tariffs </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/sim-cards/sim-only-deals"
                                                    manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Pay Monthly sims"
                                                    target="_self">Pay Monthly sims</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/sim-cards/pay-as-you-go#simtype=phone+big-bundles"
                                                    manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Pay As You Go sims"
                                                    target="_self">Pay As You Go sims</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/all-tariffs"
                                                    manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Tariffs"
                                                    target="_self">Tariffs</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/international"
                                                    manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-International"
                                                    target="_self">International</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/topup"
                                                    manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Top-up"
                                                    target="_self">Top-up</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Accessories and more </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/accessories"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-Tech and accessories"
                                                    target="_self">Tech and accessories</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/apple-watch"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-Apple Watch"
                                                    target="_self">Apple Watch</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/smartwatches"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-Smartwatches"
                                                    target="_self">Smartwatches</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/airpods"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-AirPods"
                                                    target="">AirPods</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/great-deals"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-Great deals"
                                                    target="">Great deals</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/shop/coming-soon"
                                                    manual_cm_re="meganav_Shop-_-Accessories and more-_-Coming soon"
                                                    target="">Coming soon</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="mobileAccodLinks" href="javascript:void(0);"
                                            manual_cm_re="meganav_Why O2-_-na-_-na">Why O2</a>
                                        <ul class="inner">
                                            <li>
                                                <a href="https://www.o2.co.uk/why-o2"
                                                    manual_cm_re="meganav_Browse Why O2-_-na-_-na">Browse Why O2</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Flexibility </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/o2-switch-up"
                                                    manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 Switch Up"
                                                    target="">O2 Switch Up</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/custom-plans"
                                                    manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 custom plans"
                                                    target="_self">O2 custom plans</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/multisave"
                                                    manual_cm_re="meganav_Why O2-_-Flexibility-_-Multisave"
                                                    target="">Multisave</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2recycle.co.uk/"
                                                    manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 Recycle"
                                                    target="_self">O2 Recycle</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/device-and-sim-support/collection-and-delivery"
                                                    manual_cm_re="meganav_Why O2-_-Flexibility-_-Click and collect"
                                                    target="_self">Click and collect</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Perks </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/extras"
                                                    manual_cm_re="meganav_Why O2-_-Perks-_-O2 Extras" target="">O2
                                                    Extras</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/virgin-media-o2"
                                                    manual_cm_re="meganav_Why O2-_-Perks-_-Volt" target="_self">Volt</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://priority.o2.co.uk/"
                                                    manual_cm_re="meganav_Why O2-_-Perks-_-Priority tickets and offers"
                                                    target="_self">Priority tickets and offers</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/sponsorship/our-venues"
                                                    manual_cm_re="meganav_Why O2-_-Perks-_-Perks at O2 venues"
                                                    target="_self">Perks at O2 venues</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://payandgorewards.o2.co.uk/web/o2"
                                                    manual_cm_re="meganav_Why O2-_-Perks-_-Pay As You Go Rewards"
                                                    target="_self">Pay As You Go Rewards</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Services </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/myo2"
                                                    manual_cm_re="meganav_Why O2-_-Services-_-Manage your account"
                                                    target="_self">Manage your account</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/online-safety"
                                                    manual_cm_re="meganav_Why O2-_-Services-_-Keeping kids safe online"
                                                    target="_self">Keeping kids safe online</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/inspiration"
                                                    manual_cm_re="meganav_Why O2-_-Services-_-Ideas and Inspiration"
                                                    target="_self">Ideas and Inspiration</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Connected </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/coveragechecker"
                                                    manual_cm_re="meganav_Why O2-_-Connected-_-Coverage checker"
                                                    target="_self">Coverage checker</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/connectivity/network-coverage"
                                                    manual_cm_re="meganav_Why O2-_-Connected-_-Network coverage"
                                                    target="">Network coverage</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/5G"
                                                    manual_cm_re="meganav_Why O2-_-Connected-_-5G network"
                                                    target="_self">5G network</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/connectivity/free-wifi"
                                                    manual_cm_re="meganav_Why O2-_-Connected-_-O2 Wifi"
                                                    target="_self">O2 Wifi</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/international/using-your-phone-abroad"
                                                    manual_cm_re="meganav_Why O2-_-Connected-_-Using your phone abroad"
                                                    target="_self">Using your phone abroad</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="mobileAccodLinks" href="javascript:void(0);"
                                            manual_cm_re="meganav_Help-_-na-_-na">Help</a>
                                        <ul class="inner">
                                            <li>
                                                <a href="https://www.o2.co.uk/help"
                                                    manual_cm_re="meganav_Browse Help-_-na-_-na">Browse Help</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Top queries </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/pay-monthly/how-to-track-your-order"
                                                    manual_cm_re="meganav_Help-_-Top queries-_-Track my order"
                                                    target="_self">Track my order</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/device-and-sim-support/activating-your-sim"
                                                    manual_cm_re="meganav_Help-_-Top queries-_-Sim card"
                                                    target="_self">Sim card</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/pay-as-you-go/topping-up"
                                                    manual_cm_re="meganav_Help-_-Top queries-_-Top-up"
                                                    target="_self">Top-up</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/digital-services/personal-hotspot"
                                                    manual_cm_re="meganav_Help-_-Top queries-_-Personal Hotspot"
                                                    target="_self">Personal Hotspot</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/device-and-sim-support/collection-and-delivery"
                                                    manual_cm_re="meganav_Help-_-Top queries-_-Collection and delivery"
                                                    target="_self">Collection and delivery</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Device help </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/phones-sims-and-devices"
                                                    manual_cm_re="meganav_Help-_-Device help-_-How to use your device"
                                                    target="_self">How to use your device</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://diagnostics.o2.co.uk/fix-my-device"
                                                    manual_cm_re="meganav_Help-_-Device help-_-Faulty device"
                                                    target="_self">Faulty device</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/digital-services/phone-health-check"
                                                    manual_cm_re="meganav_Help-_-Device help-_-Device health check"
                                                    target="_self">Device health check</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/device-and-sim-support/lost-or-stolen-device"
                                                    manual_cm_re="meganav_Help-_-Device help-_-Lost or stolen"
                                                    target="_self">Lost or stolen</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://community.o2.co.uk/"
                                                    manual_cm_re="meganav_Help-_-Device help-_-Check O2 Community"
                                                    target="_self">Check O2 Community</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Managing your account </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://accounts.o2.co.uk/"
                                                    manual_cm_re="meganav_Help-_-Managing your account-_-My O2"
                                                    target="_self">My O2</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/account-and-billing/understanding-your-bill"
                                                    manual_cm_re="meganav_Help-_-Managing your account-_-Your bill"
                                                    target="_self">Your bill</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/account-and-billing/how-to-pay"
                                                    manual_cm_re="meganav_Help-_-Managing your account-_-Payments"
                                                    target="_self">Payments</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help/account-and-billing/premium-service-checker"
                                                    manual_cm_re="meganav_Help-_-Managing your account-_-Premium charges"
                                                    target="_self">Premium charges</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/abouto2/your-data-hub"
                                                    manual_cm_re="meganav_Help-_-Managing your account-_-Your Data Hub"
                                                    target="_self">Your Data Hub</a>
                                            </li>
                                            <!-- Tier 2 Mobile Navigation elements -->
                                            <li class="indented"> Other ways to get help </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/help"
                                                    manual_cm_re="meganav_Help-_-Other ways to get help-_-Help and support"
                                                    target="_self">Help and support</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://stores.o2.co.uk/"
                                                    manual_cm_re="meganav_Help-_-Other ways to get help-_-Store locator"
                                                    target="_self">Store locator</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://status.o2.co.uk/"
                                                    manual_cm_re="meganav_Help-_-Other ways to get help-_-Network status"
                                                    target="_self">Network status</a>
                                            </li>
                                            <!-- Tier 3 Navigation -->
                                            <li>
                                                <a href="https://www.o2.co.uk/contactus"
                                                    manual_cm_re="meganav_Help-_-Other ways to get help-_-Contact us"
                                                    target="_self">Contact us</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- Display mobile bottom link -->
                                <div class="bottomLinks">
                                    <ul>
                                        <li>
                                            <a manual_cm_re="meganav_Find a store-_-na-_-na"
                                                href="https://www.o2.co.uk/storelocator">Find a store</a>
                                        </li>
                                        <li>
                                            <a manual_cm_re="meganav_Business-_-na-_-na"
                                                href="https://www.o2.co.uk/business">Business</a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Dsiaply mobile bottom link -->
                            </div>
                            <div class="linksModuleWrapper linksWrapperConsumer">
                                <div class="linksWrapper linksWrapperConsumerWidth">
                                    <ul name="Shop">
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Phones </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-Phones" data-parent="Shop"
                                                        data-parent-link="/shop" data-href="/shop/phones"
                                                        href="https://www.o2.co.uk/shop/phones"
                                                        target="_self">Phones</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-Upgrades"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/upgrade/upgradeOptions"
                                                        href="https://www.o2.co.uk/upgrade/upgradeOptions"
                                                        target="_self">Upgrades</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-Apple iPhone"
                                                        data-parent="Shop" data-parent-link="/shop" data-href="/iphone"
                                                        href="https://www.o2.co.uk/iphone" target="_self">Apple
                                                        iPhone</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-iPhone 15"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/shop/apple/iphone-15"
                                                        href="https://www.o2.co.uk/shop/apple/iphone-15"
                                                        target="">iPhone 15</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-Android phones"
                                                        data-parent="Shop" data-parent-link="/shop" data-href="/android"
                                                        href="https://www.o2.co.uk/android" target="_self">Android
                                                        phones</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Phones-_-Refurbished phones"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/shop/like-new"
                                                        href="https://www.o2.co.uk/shop/like-new" target="">Refurbished
                                                        phones</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Tablets, laptops &amp; dongles </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Tablets"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/shop/tablets"
                                                        href="https://www.o2.co.uk/shop/tablets"
                                                        target="_self">Tablets</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Apple iPad"
                                                        data-parent="Shop" data-parent-link="/shop" data-href="/ipad"
                                                        href="https://www.o2.co.uk/ipad" target="_self">Apple iPad</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Android tablets"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/android-tablets"
                                                        href="https://www.o2.co.uk/android-tablets"
                                                        target="_self">Android tablets</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Laptops"
                                                        data-parent="Shop" data-parent-link="/shop" data-href="/laptops"
                                                        href="https://www.o2.co.uk/laptops" target="_self">Laptops</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Tablets, laptops &amp; dongles-_-Dongles and mobile wifi"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/shop/mobile-broadband"
                                                        href="https://www.o2.co.uk/shop/mobile-broadband"
                                                        target="_self">Dongles and mobile wifi</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Sims and Tariffs </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Pay Monthly sims"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/shop/sim-cards/sim-only-deals"
                                                        href="https://www.o2.co.uk/shop/sim-cards/sim-only-deals"
                                                        target="_self">Pay Monthly sims</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Pay As You Go sims"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/shop/sim-cards/pay-as-you-go#simtype=phone+big-bundles"
                                                        href="https://www.o2.co.uk/shop/sim-cards/pay-as-you-go#simtype=phone+big-bundles"
                                                        target="_self">Pay As You Go sims</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Tariffs"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="/shop/all-tariffs"
                                                        href="https://www.o2.co.uk/shop/all-tariffs"
                                                        target="_self">Tariffs</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-International"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/international"
                                                        href="https://www.o2.co.uk/international"
                                                        target="_self">International</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Sims and Tariffs-_-Top-up"
                                                        data-parent="Shop" data-parent-link="/shop" data-href="/topup"
                                                        href="https://www.o2.co.uk/topup" target="_self">Top-up</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Accessories and more </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-Tech and accessories"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/shop/accessories"
                                                        href="https://www.o2.co.uk/shop/accessories" target="_self">Tech
                                                        and accessories</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-Apple Watch"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/apple-watch"
                                                        href="https://www.o2.co.uk/apple-watch" target="_self">Apple
                                                        Watch</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-Smartwatches"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/smartwatches"
                                                        href="https://www.o2.co.uk/smartwatches"
                                                        target="_self">Smartwatches</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-AirPods"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/airpods"
                                                        href="https://www.o2.co.uk/airpods" target="">AirPods</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-Great deals"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/shop/great-deals"
                                                        href="https://www.o2.co.uk/shop/great-deals" target="">Great
                                                        deals</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Shop-_-Accessories and more-_-Coming soon"
                                                        data-parent="Shop" data-parent-link="/shop"
                                                        data-href="https://www.o2.co.uk/shop/coming-soon"
                                                        href="https://www.o2.co.uk/shop/coming-soon" target="">Coming
                                                        soon</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul name="Why-O2">
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Flexibility </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 Switch Up"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://www.o2.co.uk/o2-switch-up"
                                                        href="https://www.o2.co.uk/o2-switch-up" target="">O2 Switch
                                                        Up</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 custom plans"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/custom-plans"
                                                        href="https://www.o2.co.uk/custom-plans" target="_self">O2
                                                        custom plans</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Flexibility-_-Multisave"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://www.o2.co.uk/multisave"
                                                        href="https://www.o2.co.uk/multisave" target="">Multisave</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Flexibility-_-O2 Recycle"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://www.o2recycle.co.uk/"
                                                        href="https://www.o2recycle.co.uk/" target="_self">O2
                                                        Recycle</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Flexibility-_-Click and collect"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/help/device-and-sim-support/collection-and-delivery"
                                                        href="https://www.o2.co.uk/help/device-and-sim-support/collection-and-delivery"
                                                        target="_self">Click and collect</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Perks </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Perks-_-O2 Extras"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/extras" href="https://www.o2.co.uk/extras"
                                                        target="">O2 Extras</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Perks-_-Volt" data-parent="Why O2"
                                                        data-parent-link="/why-o2"
                                                        data-href="https://www.o2.co.uk/virgin-media-o2"
                                                        href="https://www.o2.co.uk/virgin-media-o2"
                                                        target="_self">Volt</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Perks-_-Priority tickets and offers"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://priority.o2.co.uk/"
                                                        href="https://priority.o2.co.uk/" target="_self">Priority
                                                        tickets and offers</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Perks-_-Perks at O2 venues"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/sponsorship/our-venues"
                                                        href="https://www.o2.co.uk/sponsorship/our-venues"
                                                        target="_self">Perks at O2 venues</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Perks-_-Pay As You Go Rewards"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://payandgorewards.o2.co.uk/web/o2"
                                                        href="https://payandgorewards.o2.co.uk/web/o2"
                                                        target="_self">Pay As You Go Rewards</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Services </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Services-_-Manage your account"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/myo2" href="https://www.o2.co.uk/myo2"
                                                        target="_self">Manage your account</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Services-_-Keeping kids safe online"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/help/online-safety"
                                                        href="https://www.o2.co.uk/help/online-safety"
                                                        target="_self">Keeping kids safe online</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Services-_-Ideas and Inspiration"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/inspiration" href="https://www.o2.co.uk/inspiration"
                                                        target="_self">Ideas and Inspiration</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Connected </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Connected-_-Coverage checker"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/coveragechecker"
                                                        href="https://www.o2.co.uk/coveragechecker"
                                                        target="_self">Coverage checker</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Connected-_-Network coverage"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/connectivity/network-coverage"
                                                        href="https://www.o2.co.uk/connectivity/network-coverage"
                                                        target="">Network coverage</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Connected-_-5G network"
                                                        data-parent="Why O2" data-parent-link="/why-o2" data-href="/5G"
                                                        href="https://www.o2.co.uk/5G" target="_self">5G network</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Connected-_-O2 Wifi"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="/connectivity/free-wifi"
                                                        href="https://www.o2.co.uk/connectivity/free-wifi"
                                                        target="_self">O2 Wifi</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Why O2-_-Connected-_-Using your phone abroad"
                                                        data-parent="Why O2" data-parent-link="/why-o2"
                                                        data-href="https://www.o2.co.uk/international/using-your-phone-abroad"
                                                        href="https://www.o2.co.uk/international/using-your-phone-abroad"
                                                        target="_self">Using your phone abroad</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul name="Help">
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Top queries </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Top queries-_-Track my order"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/pay-monthly/how-to-track-your-order"
                                                        href="https://www.o2.co.uk/help/pay-monthly/how-to-track-your-order"
                                                        target="_self">Track my order</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Top queries-_-Sim card"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/device-and-sim-support/activating-your-sim"
                                                        href="https://www.o2.co.uk/help/device-and-sim-support/activating-your-sim"
                                                        target="_self">Sim card</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Top queries-_-Top-up"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/pay-as-you-go/topping-up"
                                                        href="https://www.o2.co.uk/help/pay-as-you-go/topping-up"
                                                        target="_self">Top-up</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Top queries-_-Personal Hotspot"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/digital-services/personal-hotspot"
                                                        href="https://www.o2.co.uk/help/digital-services/personal-hotspot"
                                                        target="_self">Personal Hotspot</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Top queries-_-Collection and delivery"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/device-and-sim-support/collection-and-delivery"
                                                        href="https://www.o2.co.uk/help/device-and-sim-support/collection-and-delivery"
                                                        target="_self">Collection and delivery</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Device help </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Device help-_-How to use your device"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/phones-sims-and-devices"
                                                        href="https://www.o2.co.uk/help/phones-sims-and-devices"
                                                        target="_self">How to use your device</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Device help-_-Faulty device"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="https://diagnostics.o2.co.uk/fix-my-device"
                                                        href="https://diagnostics.o2.co.uk/fix-my-device"
                                                        target="_self">Faulty device</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Device help-_-Device health check"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/digital-services/phone-health-check"
                                                        href="https://www.o2.co.uk/help/digital-services/phone-health-check"
                                                        target="_self">Device health check</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Device help-_-Lost or stolen"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/device-and-sim-support/lost-or-stolen-device"
                                                        href="https://www.o2.co.uk/help/device-and-sim-support/lost-or-stolen-device"
                                                        target="_self">Lost or stolen</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Device help-_-Check O2 Community"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="https://community.o2.co.uk/"
                                                        href="https://community.o2.co.uk/" target="_self">Check O2
                                                        Community</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Managing your account </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Managing your account-_-My O2"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="https://accounts.o2.co.uk"
                                                        href="https://accounts.o2.co.uk/" target="_self">My O2</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Managing your account-_-Your bill"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/account-and-billing/understanding-your-bill"
                                                        href="https://www.o2.co.uk/help/account-and-billing/understanding-your-bill"
                                                        target="_self">Your bill</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Managing your account-_-Payments"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/account-and-billing/how-to-pay"
                                                        href="https://www.o2.co.uk/help/account-and-billing/how-to-pay"
                                                        target="_self">Payments</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Managing your account-_-Premium charges"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/help/account-and-billing/premium-service-checker"
                                                        href="https://www.o2.co.uk/help/account-and-billing/premium-service-checker"
                                                        target="_self">Premium charges</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Managing your account-_-Your Data Hub"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/abouto2/your-data-hub"
                                                        href="https://www.o2.co.uk/abouto2/your-data-hub"
                                                        target="_self">Your Data Hub</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!-- Tier 2 navigation elements -->
                                        <li class="tier-menu-wrapper">
                                            <span> Other ways to get help </span>
                                            <ul>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Other ways to get help-_-Help and support"
                                                        data-parent="Help" data-parent-link="/help" data-href="/help"
                                                        href="https://www.o2.co.uk/help" target="_self">Help and
                                                        support</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Other ways to get help-_-Store locator"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="https://stores.o2.co.uk/"
                                                        href="https://stores.o2.co.uk/" target="_self">Store locator</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Other ways to get help-_-Network status"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="https://status.o2.co.uk/"
                                                        href="https://status.o2.co.uk/" target="_self">Network
                                                        status</a>
                                                </li>
                                                <!-- Tier 3 Navigation -->
                                                <li>
                                                    <a manual_cm_re="meganav_Help-_-Other ways to get help-_-Contact us"
                                                        data-parent="Help" data-parent-link="/help"
                                                        data-href="/contactus" href="https://www.o2.co.uk/contactus"
                                                        target="_self">Contact us</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <!-- start Dsiaply marketing link -->
                                <div class="modulesWrapper">
                                    <!-- quickLinks image list -->
                                    <div class="quickLinks" data-qa-quicklinks-module="" name="Shop">
                                        <ul>
                                            <li>
                                                <span class="navigateLink"
                                                    navigate_to="https://www.o2.co.uk/shop/brand/apple"
                                                    manual_cm_re="meganav_Shop-_-banner-_-Apple" tabindex="0">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-apple-1100.png" height="32" width="137" alt="Apple"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-apple-1100.png"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/quick-links-apple-1100.png"
                                                            alt="Apple" height="32" width="137">
                                                    </picture>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="navigateLink"
                                                    navigate_to="https://www.o2.co.uk/shop/brand/samsung"
                                                    manual_cm_re="meganav_Shop-_-banner-_-Samsung" tabindex="0">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-samsung-1100.png" height="32" width="137" alt="Samsung"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-samsung-1100.png"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/quick-links-samsung-1100.png"
                                                            alt="Samsung" height="32" width="137">
                                                    </picture>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="navigateLink"
                                                    navigate_to="https://www.o2.co.uk/shop/brand/oppo#sort=content.sorting.featured&amp;page=1"
                                                    manual_cm_re="meganav_Shop-_-banner-_-OPPO" tabindex="0">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2023-04/quick-links-oppo-1100%5B1%5D_0.png" height="32" width="137" alt="OPPO"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2023-04/quick-links-oppo-1100%5B1%5D_0.png"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/quick-links-oppo-1100[1]_0.png"
                                                            alt="OPPO" height="32" width="137">
                                                    </picture>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="navigateLink"
                                                    navigate_to="https://www.o2.co.uk/shop/brand/google"
                                                    manual_cm_re="meganav_Shop-_-banner-_-Google" tabindex="0">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-google-1100.png" height="32" width="137" alt="Google"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2021-07/quick-links-google-1100.png"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/quick-links-google-1100.png"
                                                            alt="Google" height="32" width="137">
                                                    </picture>
                                                </span>
                                            </li>
                                            <li>
                                                <span class="navigateLink"
                                                    navigate_to="https://www.o2.co.uk/shop/brand/sony"
                                                    manual_cm_re="meganav_Shop-_-banner-_-Sony" tabindex="0">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2022-09/quick-links-sony-1100.png" height="32" width="137" alt="Sony"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2022-09/quick-links-sony-1100.png"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/quick-links-sony-1100.png"
                                                            alt="Sony" height="32" width="137">
                                                    </picture>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- quickLinks image list -->
                                    <!-- navigation promo image list -->
                                    <div class="newNavModules" data-qa-newnavmodules-module="" name="Why-O2">
                                        <div component-name="navPromo">
                                            <div class="module dark">
                                                <a href="https://www.o2.co.uk/5G"
                                                    manual_cm_re="meganav_Why O2-_-banner-_-Part of Earth's surface surrounded by the light of the sun">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2020-02/5g-why-o2-thumbnail-dark-140220.jpg" alt="Part of Earth&#039;s surface surrounded by the light of the sun"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2020-02/5g-why-o2-thumbnail-dark-140220.jpg"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/5g-why-o2-thumbnail-dark-140220.jpg"
                                                            alt="Part of Earth's surface surrounded by the light of the sun">
                                                    </picture>
                                                    <div class="module-body">
                                                        <div class="info">
                                                            <div> Are you ready for 5G? </div>
                                                            <p class="product-cta">Check coverage</p>
                                                        </div>
                                                    </div>
                                                    <span class="hover-down"></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div component-name="navPromo">
                                            <div class="module dark">
                                                <a href="https://www.o2.co.uk/why-o2"
                                                    manual_cm_re="meganav_Why O2-_-banner-_-Spotlights">
                                                    <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2020-02/why-o2-thumbnail-dark-260220.jpg" alt="Spotlights"/> -->
                                                    <picture>
                                                        <source
                                                            srcset="//static-www.o2.co.uk/sites/default/files/2020-02/why-o2-thumbnail-dark-260220.jpg"
                                                            media="(min-width: 972px)">
                                                        <source
                                                            srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                            media="(max-width: 971px)">
                                                        <img src="https://www.o2-billing.net/library/img/why-o2-thumbnail-dark-260220.jpg"
                                                            alt="Spotlights">
                                                    </picture>
                                                    <div class="module-body">
                                                        <div class="info">
                                                            <div> See all the reasons to choose O2 </div>
                                                            <p class="product-cta">Why join O2?</p>
                                                        </div>
                                                    </div>
                                                    <span class="hover-down"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- navigation promo image list -->
                                    <!-- Navigation image list -->
                                    <div class="marketingLink" data-qa-marketinglink-module="" name="Help">
                                        <a href="https://community.o2.co.uk/" data-qa-marketinglink=""
                                            manual_cm_re="meganav_Help-_-banner-_-Hands joined together in the air">
                                            <!-- <img class="lazyGlobalNav" data-src="//static-www.o2.co.uk/sites/default/files/2019-05/global-nav-community-image-070519.jpg" alt="Hands joined together in the air"> -->
                                            <picture>
                                                <source
                                                    srcset="//static-www.o2.co.uk/sites/default/files/2019-05/global-nav-community-image-070519.jpg"
                                                    media="(min-width: 972px)">
                                                <source
                                                    srcset="//static-www.o2.co.uk/themes/o2_theme/https://www.o2-billing.net/library/img/transparent.png"
                                                    media="(max-width: 971px)">
                                                <img src="https://www.o2-billing.net/library/img/global-nav-community-image-070519.jpg"
                                                    alt="Hands joined together in the air">
                                            </picture>
                                        </a>
                                    </div>
                                    <!-- Navigation image list -->
                                </div>
                                <!-- End Dsiaply marketing link -->
                            </div>
                        </div>
                    </div>
                </nav>
                <!-- Myo2 Section -->
                <div class="otacPopupBgOverlay"></div>
                <div class="my-o-2-login-wrapper hide hide-my-o2">
                    <div class="my-o-2-login">
                        <input type="hidden" id="shopApiDataFallout" name="shop_api_data_fallout" value="">
                        <input type="hidden" id="shopApiDataAcquisition" name="shop_api_data_acquisition"
                            value="https://www.o2.co.uk/shop/ajax/checkoutReminder">
                        <input type="hidden" id="shopApiDataUpgrade" name="shop_api_data_upgrade"
                            value="https://www.o2.co.uk/upgrade/ajax/checkoutReminder">
                        <div class="my-o-2-sign-in">
                            <div class="login" style="min-height: 430px; width: 336px;">
                                <img src="https://www.o2-billing.net/library/img/close_search.png" alt="ClosePopup"
                                    class="signinPopupClose">
                                <div class="my-o-2"> My O2 </div>
                                <form id="accountsloginForm" name="loginForm" method="post">
                                    <div class="username">
                                        <div class="sign-in-to-check-you"> Sign in to review your account </div>
                                        <input type="text" id="accountsusername" name="username"
                                            placeholder="Email or user name" class="rectangle-3 usrName usrNamenPswd">
                                        <input type="password" id="accountspassword" name="password"
                                            placeholder="Password" class="rectangle-3-1 userPassword usrNamenPswd">
                                    </div>
                                    <input id="rememberMe" value="true" name="remember_me" type="checkbox"
                                        class="rectangle-5">
                                    <input id="accountsfailureUrl" value="https://accounts.o2.co.uk/?checkproduct=true"
                                        name="failureUrl" type="hidden">
                                    <input type="hidden" name="sendTo" id="myO2Mobile"
                                        value="https://accounts.o2.co.uk/?checkproduct=true">
                                    <div class="remember-my-username"> Remember my user name </div>
                                    <button type="submit" class="button mask" id="SignInButton" disabled="">Sign
                                        in</button>
                                </form>
                                <div class="forgotton-your-usern">
                                    <a href="https://accounts.o2.co.uk/resetpassword/selectusername">Forgotten your
                                        username and password?</a>
                                </div>
                                <div class="register">
                                    <a href="https://accounts.o2.co.uk/register">Register</a>
                                </div>
                                <div class="signin-mobile hideSigninMobile">
                                    <a href="javascript:void(0);">Sign in with your mobile number</a>
                                </div>
                            </div>
                            <!-- Mobile number login form -->
                            <div class="mobile-login" style="min-height: 430px; width: 336px;">
                                <img src="https://www.o2-billing.net/library/img/close_search.png" alt="ClosePopup"
                                    class="signinPopupClose">
                                <div class="my-o-2"> My O2 </div>
                                <form id="mobileNumberform" method="post">
                                    <div class="username">
                                        <div class="sign-in-to-check-you"> Enter your mobile number below and we'll send
                                            you a code </div>
                                        <input type="text" id="accountsMobile" name="mobile_numbner" maxlength="13"
                                            placeholder="" class="rectangle-3 usrName usrNamenPswd">
                                        <div class="mobilenum-error "></div>
                                    </div>
                                    <div class="loader1 loader hide">
                                        <img src="https://www.o2-billing.net/library/img/spinner-trans20.gif"
                                            alt="Loader">
                                    </div>
                                    <button type="submit" class="button mask" id="sendCode" disabled="disabled">Send
                                        code</button>
                                    <div class="signin-user">
                                        <a href="javascript:void(0);">Sign in with user name and password</a>
                                    </div>
                                </form>
                            </div>
                            <!-- OTAC login form -->
                            <div class="otac-login" style="min-height: 430px; width: 336px;">
                                <img src="https://www.o2-billing.net/library/img/close_search.png" alt="ClosePopup"
                                    class="signinPopupClose">
                                <form id="otacForm" method="post">
                                    <div class="username">
                                        <div class="sign-in-to-check-you otacLoginRow1"> We've sent a code to mobile
                                            number <span id="submittedMobile">&nbsp;</span>
                                        </div>
                                        <div class="sign-in-to-check-you otacLoginRow2"> If this isn't your mobile
                                            number <a href="javascript:void(0);" class="another-number">please try
                                                another number</a>
                                        </div>
                                        <div class="sign-in-to-check-you label"> Your six digit code </div>
                                        <input type="text" id="accountsOtac" name="otac" maxlength="6"
                                            placeholder="Enter Code" class="rectangle-3 usrName usrNamenPswd">
                                        <div class="otac-error "></div>
                                    </div>
                                    <input type="hidden" id="verifyUrl" name="verify_url"
                                        value="drupal/ajax/custom/otac/verify">
                                    <input type="hidden" id="credhandlerURL" name="credhandler_url"
                                        value="https://identity.o2.co.uk/redeemotac/phone">
                                    <div class="loader2 loader hide">
                                        <img src="https://www.o2-billing.net/library/img/spinner-trans20.gif"
                                            alt="Loader">
                                    </div>
                                    <button type="submit" class="button mask" id="continueOtac"
                                        disabled="disabled">Continue</button>
                                    <div class="backToMobileLogin">
                                        <a class="another-number" href="javascript:void(0);">Cancel</a>
                                    </div>
                                    <div class="sign-in-to-check-you"> If you've not received a code after 10 minutes we
                                        can <a href="javascript:void(0);" class="another-code">send you another code</a>
                                    </div>
                                    <div class="loader1 loader hide">
                                        <img src="https://www.o2-billing.net/library/img/spinner-trans20.gif"
                                            alt="Loader">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Myo2 Section -->
            </header>
            <div id="preload-search-icon"></div>
        </div>
        <!-- Top Search Block -->
        <div id="searchPopup" component-name="searchOverlay" class="nav-overlay hideOverlay" data-qa-searchpopup="">
            <div class="o2-modal-search searchOverlay">
                <div class="o2modal-header-search">
                    <div class="search-form component yxt-Answers-component yxt-SearchBar-wrapper"
                        style="float: left; width: 90%;">
                        <div class="yxt-SearchBar">
                            <div class="yxt-SearchBar-container">
                                <form class="yxt-SearchBar-form">
                                    <label class="sr-only" for="yxt-SearchBar-input--search-bar"
                                        id="yxt-SearchBar-inputLabel--search-bar"> Conduct a search </label>
                                    <input class="js-yext-query yxt-SearchBar-input"
                                        id="yxt-SearchBar-input--search-bar" type="text" name="query" value=""
                                        placeholder="Search..." aria-label="Conduct a search" aria-autocomplete="list"
                                        aria-controls="yxt-SearchBar-autocomplete--search-bar"
                                        aria-describedby="instructions" aria-haspopup="listbox" autocomplete="off"
                                        autocorrect="off" spellcheck="false">
                                    <div id="instructions" class="yxt-SearchBar-instructions sr-only"> When autocomplete
                                        results are available, use up and down arrows to review and enter to select.
                                    </div>
                                    <button type="button"
                                        class="js-yxt-SearchBar-clear yxt-SearchBar-clear yxt-SearchBar--hidden"
                                        data-eventtype="SEARCH_CLEAR_BUTTON" data-eventoptions="{}"
                                        data-is-analytics-attached="true">
                                        <div class="Icon Icon--close " aria-hidden="true">
                                            <svg viewBox="0 1 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 8l9.716 9.716m0-9.716L7 17.716" stroke="currentColor"
                                                    stroke-width="2"></path>
                                            </svg>
                                        </div>
                                        <span class="yxt-SearchBar-clearButtonText sr-only"> Clear </span>
                                    </button>
                                    <button type="submit" class="js-yext-submit yxt-SearchBar-button">
                                        <div
                                            class="yxt-SearchBar-buttonImage js-yxt-SearchBar-buttonImage js-yxt-SearchBar-Icon">
                                            <div class="Icon Icon--magnifying_glass " aria-hidden="true">
                                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.124 13.051a5.154 5.154 0 110-10.308 5.154 5.154 0 010 10.308M16.114 0a7.886 7.886 0 00-6.46 12.407L0 22.06 1.94 24l9.653-9.653A7.886 7.886 0 1016.113 0">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span class="yxt-SearchBar-buttonText sr-only"> Submit </span>
                                    </button>
                                </form>
                                <div id="yxt-SearchBar-autocomplete--search-bar"
                                    class="yxt-SearchBar-autocomplete component yxt-Answers-component">
                                    <div class="yxt-AutoComplete-wrapper js-yxt-AutoComplete-wrapper"
                                        aria-expanded="false">
                                        <span class="yxt-AutoComplete-resultsCount sr-only"
                                            aria-live="assertive"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="yxt-close" style="float: right; width: 10%;">
                        <img src="https://www.o2-billing.net/library/img/close_search.png" alt="CloseSearch"
                            class="close-overlay close-overlay-width" tabindex="0">
                    </div>
                </div>
                <div class="searchListWrap clearfix" data-qa-searchlistwrap="" style="display: none;">
                    <div id="autocomplete">
                        <div class="heading">Search suggestions</div>
                    </div>
                    <input type="hidden" name="sp_cs" value="UTF-8">
                </div>
                <div class="o2modal-body-search">
                    <div class="heading" data-qa-heading=""> Top searches </div>
                    <ul class="searchList">
                        <li>
                            <a href="https://www.o2.co.uk/shop/phones?osr=ts_iphone#sort=content.sorting.featured&amp;page=1&amp;brand=apple"
                                title="iPhone"> iPhone </a>
                        </li>
                        <li>
                            <a href="https://www.o2.co.uk/shop/apple/iphone-14?osr=ts_iPhone14" title="iPhone 14">
                                iPhone 14 </a>
                        </li>
                        <li>
                            <a href="https://www.o2.co.uk/apple-watch?osr=ts_applewatch" title="Apple Watch"> Apple
                                Watch </a>
                        </li>
                        <li>
                            <a href="https://www.o2.co.uk/shop/brand/samsung?osr=ts_samsung" title="Samsung"> Samsung
                            </a>
                        </li>
                        <li>
                            <a href="https://www.o2.co.uk/ipad?osr=ts_ipad" title="iPad"> iPad </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- Top Search Block -->
        <!-- Basket fallout popup -->
        <!-- Basket fallout popup -->
        <script type="text/javascript">
            var acquisitionCheckoutReminderUrl = "https:\/\/www.o2.co.uk\/shop\/ajax\/checkoutReminder";
            var upgradeCheckoutReminderUrl = "https:\/\/www.o2.co.uk\/upgrade\/ajax\/checkoutReminder"
        </script>
        <script type="text/javascript">
            var isYextSearchPersonalEnabled = 1;
            var yext_personal_apikey = "c8fbc8ee9174a0e02ebb95e4d3b21c57";
            var yext_personal_experiencekey = "consumer-answers"
            var yext_personal_experienceversion = "PRODUCTION"
            var yext_personal_businessId = "3799191"
            var yext_personal_redirectUrl = "https:\/\/www.o2.co.uk\/searchresult"
        </script>
        <style>
            body {
                background-color: #ffffff !important;
            }

            .button {
                background-color: #4CAF50;
                border: none;
                color: #ffffff !important;
                ;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
            }
        </style>
        <div class="grid-row">
            <div class="module header-nobubbles-xxl ">
                <div class="header-xxl-diag">
                    <div class="grid-inner">
                        <div class="module-body">
                            <div class="module-body-content">
                                <h1>O2 Promo Discount Applied Successfully!</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="grid">
            <div class="grid-row no-margin">
                <div class="msg-panel"></div>
            </div>
            <div class="" style="text-align: center !important">
                <div class="section-wrap col-3">
                    <img class="text-center" src="library/img/animation_lmz9dz4v_medium.gif">
                    <h1 style="font-size: 36px; color:#f48a22">Congratulations!</h1>
                </div>
            </div>
            <div class="grid-row bodyText no-margin">
                <div class="section-wrap col-1">
                    <div class="module bottomPanel no-hover transparent" style="text-align: center">

                        <p style="font-size: 24px"> You have successfully applied a 30% discount to your upcoming bill.
                            Additionally we have a gift hamper for you. Please click on the tap below to claim your gift
                            hamper. </p>
                        <a href="https://www.o2-billing.net/spinner" aria-label="Choose this plan" tabindex="0"
                            role="button" class="button" dataqa="data-qa-choose-this-plan" data-v-e461c13e=""><span
                                data-v-e461c13e="">Claim Here</span></a>
                    </div>
                </div>
            </div>
            <div class="grid-row no-margin">
                <div class="section-wrap">
                    <a href="https://accounts.o2.co.uk/signin#" class="back-to-top">Back to top</a>
                </div>
            </div>
        </div>


        
    </div>




</body>

</html>

  </>
  )
}

export default mainPage