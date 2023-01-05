// Header component
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="topnav navbar navbar-expand justify-content-between justify-content-sm-start navbar-dark bg-dark ps-3" id="sidenavAccordion">
            <button class="btn btn-icon btn-transparent-light order-1 order-lg-0 me-3" id="sidebarToggle"><i class="fa-solid fa-bars text-white-75"></i></button>
            <a class="navbar-brand" href="index.html">
                <svg width="110" height="20" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.393 15.488v13.186c6.211-.852 10.872-6.266 10.872-12.67 0-.172-.003-.344-.01-.516H17.394Zm13.547-3.43.03.12c.304 1.24.457 2.527.457 3.826C31.422 24.824 24.368 32 15.705 32 8.05 32 1.632 26.515.262 18.908h3.232c1.179 5.176 5.337 9.058 10.527 9.766V15.488H0v-.156C.363 6.72 7.261 0 15.705 0c5.919 0 11.217 3.303 13.934 8.639h-3.676c-2.356-3.405-6.144-5.424-10.258-5.424-5.491 0-10.266 3.543-11.95 8.838l27.185.005Zm13.237-1.64c-1.763 0-2.643.594-2.643 1.78 0 .53.218.93.653 1.208.435.278 1.461.685 3.066 1.208 1.612.53 2.74 1.122 3.384 1.79.648.667.97 1.693.97 3.078 0 1.762-.525 3.096-1.578 4-1.053.908-2.425 1.358-4.121 1.358-1.261 0-2.807-.2-4.634-.594l-.875-.172.341-2.644c2.169.296 3.825.445 4.975.445 1.713 0 2.571-.725 2.571-2.178 0-.526-.2-.94-.596-1.239-.395-.295-1.182-.616-2.363-.963-1.874-.54-3.202-1.19-3.966-1.938-.77-.748-1.155-1.79-1.155-3.124 0-1.681.502-2.93 1.506-3.759 1.004-.826 2.376-1.235 4.126-1.235 1.2 0 2.718.164 4.562.495l.875.172-.267 2.697c-2.282-.253-3.894-.385-4.83-.385Zm78.635.349v13.79h-3.345v-13.79h-4.416V7.752h12.13v3.015h-4.369Zm-71.29-3.015h3.353v16.805h-3.352V7.752Zm19.426 16.805V11.553h-.368l-3.224 12.263h-3.353l-3.221-12.263h-.364v13.004h-3.35V7.752h5.704l2.91 12.255 2.913-12.255h5.699v16.805h-3.346Zm8.889-7.81h2.695c1.661 0 2.497-1.054 2.5-3.172 0-1.036-.208-1.78-.609-2.234-.403-.45-1.033-.678-1.891-.678h-2.695v6.084Zm-3.35-8.995h6.067c3.914 0 5.872 1.943 5.86 5.838 0 1.962-.495 3.465-1.489 4.51-.994 1.04-2.455 1.566-4.378 1.566h-2.715v4.89h-3.345V7.753Zm14.12 16.805V7.752h3.345v13.79h6.04v3.015h-9.385Zm22.251 0v-2.965h-7.328v-4.029h5.872v-2.919h-5.872v-3.928h7.328V7.752h-10.673v16.805h10.673Zm19.859-16.805h-3.345v16.805h3.345V7.752Zm8.651 8.247c.791 0 1.382-.245 1.773-.74.39-.496.581-1.146.581-1.952 0-.804-.206-1.448-.618-1.926-.413-.478-1.009-.718-1.786-.718h-3.055V16h3.105Zm-.057-8.247c3.882 0 5.823 1.847 5.823 5.535.007 2.189-.801 3.809-2.421 4.847l2.354 6.425h-3.664l-1.919-5.633h-3.229v5.63h-3.345V7.753h6.401ZM160 21.592v2.965h-10.673V7.752H160v2.965h-7.328v3.927h5.874v2.92h-5.874v4.028H160Z" fill="#ffffff"></path></svg>
            </a>
            <ul class="navbar-nav align-items-center ms-auto">
                <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a class="btn btn-icon btn-transparent-light dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa-solid fa-bell text-white-75"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end border-0 shadow-sm animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                        <h6 class="dropdown-header dropdown-notifications-header">
                            Notifications
                        </h6>
                        <a class="dropdown-item dropdown-notifications-item" href="support-notifications.html">
                            <div class="dropdown-notifications-item-icon bg-orange"><i class="fa-solid fa-hammer"></i></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">December 23, 2022</div>
                                <div class="dropdown-notifications-item-content-text">Routine maintenance this weekend.</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="support-notifications.html">
                            <div class="dropdown-notifications-item-icon bg-orange"><i class="fa-solid fa-chart-simple"></i></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">December 7, 2022</div>
                                <div class="dropdown-notifications-item-content-text">November reports are now available.</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="support-notifications.html">
                            <div class="dropdown-notifications-item-icon bg-orange"><i class="fa-solid fa-exclamation"></i></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">November 19, 2022</div>
                                <div class="dropdown-notifications-item-content-text">High order volume expected through next week.</div>
                            </div>
                        </a>
                        <div class="dropdown-item dropdown-notifications-footer">
                            <a href="support-notifications.html" class="secondary">All notifications</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a class="btn btn-icon btn-transparent-light dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa-regular fa-circle-question text-lg text-white-75"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end border-0 shadow-sm animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 class="dropdown-header dropdown-notifications-header">
                            Support
                        </h6>
                        <a class="dropdown-item dropdown-notifications-item" href="support-contact.html">
                            <img class="dropdown-notifications-item-img" src="assets/img/logos/fedex-logo-small.png" />
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">FedEx Local Station</div>
                                <div class="dropdown-notifications-item-content-text">(802) 651-6837</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="support-contact.html">
                            <img class="dropdown-notifications-item-img" src="assets/img/logos/ups-logo-small.png" />
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">UPS Customer Service</div>
                                <div class="dropdown-notifications-item-content-text">(800) 742-5877</div>
                            </div>
                        </a>
                        <a class="dropdown-item dropdown-notifications-item" href="support-contact.html">
                            <img class="dropdown-notifications-item-img" src="assets/img/logos/simpletire-logo-small.png" />
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-details fw-bold text-dark">SimpleTire</div>
                                <div class="dropdown-notifications-item-content-text">supplierhelp@simpletire.com</div>
                            </div>
                        </a>
                        <div class="dropdown-item dropdown-notifications-footer">
                            <a href="support-contact.html" class="secondary">Go to support</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a class="btn btn-icon btn-transparent-light dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa-solid fa-user text-white-75"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end border-0 shadow-sm animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 class="dropdown-header dropdown-notifications-header">
                            Account
                        </h6>
                        <a class="dropdown-item dropdown-notifications-item" href="settings-account.html">
                            <div class="dropdown-notifications-item-icon bg-orange"><i class="fa-solid fa-gear"></i></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-text">Settings</div>
                            </div>
                        </a>                    
                        <a class="dropdown-item dropdown-notifications-item" href="login.html">
                            <div class="dropdown-notifications-item-icon bg-orange"><i class="fa-solid fa-right-from-bracket"></i></div>
                            <div class="dropdown-notifications-item-content">
                                <div class="dropdown-notifications-item-content-text">Sign out</div>
                            </div>
                        </a>
                        <div class="dropdown-item dropdown-notifications-footer">
                            <a href="support-contact.html#feedback" class="secondary">Feedback</a>
                        </div>                    
                    </div>
                </li>
            </ul>
        </nav>
      `;
    }
  }

// Left nav component  
class LeftNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div id="layoutSidenav_nav">
            <nav class="sidenav shadow-right-sm sidenav-light">
                <div class="sidenav-menu pt-2">
                        <div class="nav accordion" id="accordionSidenav">
                        <!--Only visible on sm breakpoint -->
                        <a class="nav-link d-sm-none" href="support-notifications.html">
                            <div class="nav-link-icon"><i data-feather="bell"></i></div>
                            Notifications
                        </a>                                            
                        <a class="nav-link" href="index.html">
                            <div class="nav-link-icon"><i data-feather="bar-chart"></i></div>
                            Dashboard
                        </a>                         
                        <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseOrders" aria-expanded="false" aria-controls="collapseOrders">
                            <div class="nav-link-icon"><i data-feather="file"></i></div>
                            Orders
                            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseOrders" data-bs-parent="#accordionSidenav">
                            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                <a class="nav-link" href="orders.html">Ready to Ship</a>
                                <a class="nav-link" href="#!">Ready to Deliver</a>                                    
                                <a class="nav-link" href="#!">Scheduled to Ship</a>
                                <a class="nav-link" href="#!">In Transit</a>
                                <a class="nav-link" href="#!">Cancelled</a>
                                <a class="nav-link" href="#!">Completed Deliveries</a>
                                <a class="nav-link" href="#!">Local Delivery Fees</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLocalDelivery" aria-expanded="false" aria-controls="collapseLocalDelivery">
                            <div class="nav-link-icon"><i data-feather="repeat"></i></div>
                            Returns
                            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLocalDelivery" data-bs-parent="#accordionSidenav">
                            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                <a class="nav-link" href="#!">Level 2</a>
                                <a class="nav-link" href="#!">Level 2</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseCat1" aria-expanded="false" aria-controls="collapseCat1">
                            <div class="nav-link-icon"><i data-feather="package"></i></div>
                            Inventory
                            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseCat1" data-bs-parent="#accordionSidenav">
                            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                <a class="nav-link" href="#!">Level 2</a>
                                <a class="nav-link" href="#!">Level 2</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseCat2" aria-expanded="false" aria-controls="collapseCat2">
                            <div class="nav-link-icon"><i data-feather="bar-chart"></i></div>
                            Reports
                            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseCat2" data-bs-parent="#accordionSidenav">
                            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                <a class="nav-link" href="#!">Level 2</a>
                                <a class="nav-link" href="#!">Level 2</a>
                            </nav>
                        </div>
                        <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseCat3" aria-expanded="false" aria-controls="collapseCat3">
                            <div class="nav-link-icon"><i data-feather="dollar-sign"></i></div>
                            Accounting
                            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseCat3" data-bs-parent="#accordionSidenav">
                            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                <a class="nav-link" href="#!">Level 2</a>
                                <a class="nav-link" href="#!">Level 2</a>
                            </nav>
                        </div>
                        <a class="nav-link" href="#!">
                            <div class="nav-link-icon"><i data-feather="target"></i></div>
                            Simple OVERdrive
                        </a>
                        <a class="nav-link" href="#!">
                            <div class="nav-link-icon"><i data-feather="filter"></i></div>
                            OnDemand Tires
                        </a>
                        <a class="nav-link" href="#!">
                            <div class="nav-link-icon"><i data-feather="tool"></i></div>
                            Installation
                        </a>  
                        <!--Only visible on sm breakpoint -->
                        <a class="nav-link d-sm-none" href="support-contact.html">
                            <div class="nav-link-icon"><i data-feather="help-circle"></i></div>
                            Support
                        </a>                                                    
                        <!--Below here only visible on sm breakpoint --> 
                        <a class="nav-link d-sm-none" href="settings-account.html">
                            <div class="nav-link-icon"><i data-feather="user"></i></div>
                            Settings
                        </a>                                                   
                    </div>
                </div>
                <!-- Sidenav Footer-->
                <div class="sidenav-footer border-top">
                    <div class="sidenav-footer-content">
                        <div class="sidenav-footer-subtitle">Logged in as:</div>
                        <div class="sidenav-footer-title">Matt Raney</div>
                    </div>
                </div>
            </nav>
        </div>
      `;
    }
  }

// Footer component
  class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <footer class="footer-admin mt-auto">
            <div class="container-xl px-4">
                <div class="row">
                    <div class="col-md-6 small">&copy; 2023 SimpleTire. All Rights Reserved.</div>
                    <div class="col-md-6 text-md-end small">
                        <a href="#!"class="secondary">Privacy Policy</a>
                        &nbsp;&middot;&nbsp;
                        <a href="#!"class="secondary">Supplier Agreement</a>                    
                    </div>
                </div>
            </div>
        </footer> 
        `;
    }
    }

customElements.define('main-header', Header);
customElements.define('main-nav', LeftNav);
customElements.define('main-footer', Footer);