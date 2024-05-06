'use client';
import CardMovie from '../../../components/template/cardMovie';
import { useEffect, useState } from "react";
function DanhMuc({ params }) {
     const slug = params.slug;
     const [movies, setMovies] = useState([]);
     const [title, setTitle] = useState(null);
     const [page, setPage] = useState(1);
     const [loading, setLoading] = useState(true);

     const getMovies = async () => {
          const res = await fetch(`https://phim.nguonc.com/api/films/danh-sach/${slug}?page=${page}`);
          const data = await res.json();
          const movieGet = data.items;
          setMovies([...movies, ...movieGet]);
          setTitle(data.cat.name);
          document.title = `Danh mục ${data.cat.name} - vudevweb.com`;
          setPage(page + 1);
          setLoading(false);
     }

     useEffect(() => {
          getMovies();
     }, [slug]);

     if (loading) {
          return (
               <div className="loading_vd">
                    <div className="spinner-border text-warning" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
          );
     }
     return (
          <div className="">
                    <CardMovie movies={movies} />
                    <div className='mt-4 text-center'>
                         <button className='btn btn-warning' onClick={getMovies}> Xem thêm </button>
                    </div>
          </div>
     );
}

export default DanhMuc
     ;