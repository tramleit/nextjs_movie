// client/AppSearch.jsx
'use client'
import { useRouter } from "next/navigation";
function AppSearch() {
     const router = useRouter();
     const handleSearch = (e) => {
          e.preventDefault();
          const search = e.target[0].value;
          //Xóa dấu tiếng việt
          const searchParams = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
          if(searchParams === '') alert ('Vui lòng nhập tên phim cần tìm');
          router.push(`/tim-kiem?q=${searchParams}`)
          // window.location.href=`/tim-kiem?q=${e.target[0].value}`;
     };

     return (
          <div className="collapse search_vd" id="tim_kiem">
               <div className="container ">
                    <div className="row">
                         <div className="col-md-12 col-10 ">
                              <div className="py-4 pb-0">
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
