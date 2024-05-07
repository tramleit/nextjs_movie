// client/AppSearch.jsx
'use client'

function AppSearch() {
     const handleSearch = (e) => {
          e.preventDefault();
          alert('Đã tìm kiếm');
     };

     return (
          <div className="collapse search_vd" id="tim_kiem">
               <div className="container">
                    <div className="row align-items-center">
                         <div className="col-md-11 col-10">
                              <div className="py-4">
                                   <form onSubmit={handleSearch} className="d-flex align-items-center">
                                        <span className="position-absolute ps-3">
                                             <i className="fe fe-search text-muted" />
                                        </span>
                                        <input type="search" className="form-control ps-6 border-0 py-3 smooth-shadow-md" placeholder="Nhập tên phim mà bạn muốn xem" />
                                        <button type="submit" className="btn btn-warning ms-2"><i className="fe fe-search"></i></button>
                                   </form>
                              </div>
                         </div>
                         {/* <div className="col-md-1 col-2">
                              <div><button type="button" className="btn-close" aria-label="Close" data-bs-toggle="collapse" data-bs-target="#tim_kiem" aria-expanded="false" aria-controls="tim_kiem" /></div>
                         </div> */}
                    </div>
               </div>
          </div>
     );
}

export default AppSearch;
