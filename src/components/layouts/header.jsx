'use client';
import React from 'react';
import Link from 'next/link';
import style from './header.module.css';

const AppHeader = () => {
     console.log("AppHeader");
     return (
          <nav className="navbar navbar-expand-lg fixed-top">
               <div className="container">
                    <a className="navbar-brand me-auto text-warning fw" href="/">Logo</a>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                         <div className="offcanvas-header">
                              <h5 className="offcanvas-title text-warning fw" id="offcanvasNavbarLabel">Logo</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                         </div>
                         <div className="offcanvas-body">
                              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                   <li className="nav-item">
                                        <a className={`nav-link nav-link-vd  mx-lg-2 fw`} aria-current="page" href="#">Trang chủ</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd  mx-lg-2" href="#">Phim Lẻ</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd mx-lg-2" href="#">Phim bộ</a>
                                   </li>
                                   <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-vd  mx-lg-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Thể loại
                                        </a>
                                        <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                   </li>
                                   <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-vd mx-lg-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Quốc gia
                                        </a>
                                        <ul className="dropdown-menu">
                                             <li><a className="dropdown-item" href="#">Action</a></li>
                                             <li><a className="dropdown-item" href="#">Another action</a></li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                    </div>

                    <div className="d-flex align-items-center">
                         <a href="#" className="ms-2 me-md-4 text-dark" data-bs-toggle="collapse" data-bs-target="#tim_kiem" aria-expanded="false" aria-controls="tim_kiem">
                              <i className="fe fe-search fs-3" />
                         </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"/>
                    </button>
               </div>
          </nav>

     );
};
export default AppHeader;