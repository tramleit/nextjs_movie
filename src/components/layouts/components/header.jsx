'use client';
import Search from '@/components/template/search';
const Header = ( {countries, genres , years} ) => {
     
     return (
          <>
          <nav className="navbar navbar-expand-lg m-0 mt-3 nav_vd">
               <div className="container">
                    <a className="navbar-brand me-auto text-warning fw" style={{color: "orange"}} href="/">PhimMoi</a>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                         <div className="offcanvas-header">
                              <h5 className="offcanvas-title text-warning fw" id="offcanvasNavbarLabel">PhimMoi</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                         </div>
                         <div className="offcanvas-body">
                              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                   <li className="nav-item">
                                        <a className={`nav-link nav-link-vd  mx-lg-2 fw`} aria-current="page" href="/">Trang chủ</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd  mx-lg-2" href="/danh-muc/phim-le">Phim Lẻ</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd mx-lg-2" href="/danh-muc/phim-bo">Phim bộ</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd mx-lg-2" href="/danh-muc/phim-dang-chieu">Phim đang chiếu</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd mx-lg-2" href="/danh-muc/hoat-hinh">Hoạt hình</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link nav-link-vd mx-lg-2" href="/danh-muc/tv-shows">TV Show</a>
                                   </li>

                                   {/* thể loại */}
                                   <li className="nav-item dropdown">
                                        <animate className="nav-link nav-link-vd  mx-lg-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Thể loại
                                        </animate>
                                        <ul className="dropdown-menu menu-scroll">
                                             {genres.map((genre, index) => (
                                                  <li key={index}>
                                                       <a className="dropdown-item" href={`/the-loai/${genre.slug}`}>{genre.title}</a>
                                                  </li>
                                             ))}
                                        </ul>
                                   </li>

                                   {/* quốc gia */}
                                   <li className="nav-item dropdown">
                                        
                                        <a className="nav-link nav-link-vd mx-lg-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Quốc gia
                                        </a>
                                        <ul className="dropdown-menu menu-scroll">
                                             {countries.map((country, index) => (
                                                  <li key={index}>
                                                       <a className="dropdown-item" href={`/quoc-gia/${country.slug}`}>{country.title}</a>
                                                  </li>
                                             ))}
                                        </ul>
                                   </li>

                                   {/* năm */}
                                   <li className="nav-item dropdown">
                                        <a className="nav-link nav-link-vd mx-lg-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                             Năm
                                        </a>
                                        <ul className="dropdown-menu menu-scroll">
                                             {years.map((year, index) => (
                                                  <li key={index}>
                                                       <a className="dropdown-item" href={`/nam-phat-hanh/${year}`}>{year}</a>
                                                  </li>
                                             ))}
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
                         <span className="navbar-toggler-icon" />
                    </button>
               </div>
          
          </nav>
               <Search />
               </>
     )
};

export default Header;