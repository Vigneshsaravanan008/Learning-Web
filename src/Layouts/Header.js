import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
function Header() {
  return (
    <div>
        <div className="nk-header nk-header-fluid is-theme">
            <div className="container-xl wide-xl">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger mr-sm-2 d-lg-none">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand">
                    <Link to="html/index.html" className="logo-link">
                        <img src={Logo} alt="" />
                    </Link>
                    </div>
                    <div className="nk-header-menu" data-content="headerNav">
                        <div className="nk-header-mobile">
                            <div className="nk-header-brand">
                            <Link to="html/index.html" className="logo-link">
                                <img src={Logo} alt="" />
                            </Link>
                            </div>
                            <div className="nk-menu-trigger mr-n2">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="headerNav"><em className="icon ni ni-arrow-left"></em></a>
                            </div>
                        </div>
                        <ul className="nk-menu nk-menu-main ui-s2">
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                                    <span className="nk-menu-text">Dashboards</span>
                                </a>
                                
                            </li>
                            <li className="nk-menu-item has-sub active current-page">
                                <a href="#" className="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                                    <span className="nk-menu-text">Applications</span>
                                </a>
                                
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                                    <span className="nk-menu-text">Pages</span>
                                </a>
                            </li>
                            <li className="nk-menu-item has-sub">
                                <a href="#" className="nk-menu-link nk-menu-toggle" data-original-title="" title="">
                                    <span className="nk-menu-text">Components</span>
                                </a>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                        
                            <li className="dropdown user-dropdown order-sm-first">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt"></em>
                                        </div>
                                        <div className="user-info d-none d-xl-block">
                                            <div className="user-status">Administrator</div>
                                            <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header