"use client"

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Comment from "./comment";
function XemPhim({ params }) {
     const searchParams = useSearchParams();
     const server = searchParams.get('server')
     const tap = searchParams.get('tap')
     // console.log(tap);
     // console.log(server);
     const [slug, setSlug] = useState(params.slug);
     const [movie, setMovie] = useState(null);
     const [tapPhim, setTapPhim] = useState(null);
     const [loading, setLoading] = useState(true);


     const getMovie = async () => {
          const res = await fetch(`https://phim.nguonc.com/api/film/${slug}`)
          const data = await res.json()
          setMovie(data.movie)
          setLoading(false)
          const test = data.movie.episodes
          test.map((item, index) => {
               if (item.server_name == server) {
                    item.items.map((ite, i) => {
                         if (ite.name == tap) {
                              setTapPhim(ite)
                              // console.log(ite);
                         }
                    })
               }
          })

          // console.log(data.movie.episodes);
     }

     const getTapPhim = () => {
          // console.log(movie);
     }

     useEffect(() => {
          getMovie()
          getTapPhim()
     }, [tap])

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
          <div>
               <div className="card">
                    <div className="card-header">
                         <nav aria-label="breadcrumb text-start">
                              <ol className="breadcrumb justify-content-start">
                                   <li className="breadcrumb-item"><a href="/" className="text-warning fw">Trang chủ</a></li>
                                   <li className="breadcrumb-item"><a href={`/phim/${movie.slug}`} className="text-warning fw">{movie.name}</a></li>
                                   <li className="breadcrumb-item active" aria-current="page">Tập: {tap}</li>
                              </ol>
                         </nav>
                    </div>
                    <div className="card-body">
                         <div className="mb-4">
                              <div className="text-warning fw mb-2">
                                   <strong><i className="fe fe-hash"></i>Tập {tap}</strong>
                              </div>
                              <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
                                   <iframe
                                        controls
                                        loading="lazy"
                                        title={tapPhim.name}
                                        allowfullscreen
                                        src={tapPhim.embed}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        frameborder="0">
                                   </iframe>
                              </div>

                         </div>

                         <hr />

                         <div className="mb-4">
                              <div className="text-warning fw mb-2">
                                   <strong><i className="fe fe-hash"></i>Các tập phim</strong>
                              </div>
                              <div>
                                   {movie.episodes.map((item, index) => (
                                        <div key={index}>
                                             <div className="text-warning text-center mb-2"> <strong>Server: </strong>{item.server_name}</div>
                                             {item.items.map((tapVip, i) => (
                                                  <a
                                                       key={i}
                                                       href={`/xem-phim/${movie.slug}?server=${encodeURIComponent(item.server_name)}&tap=${encodeURIComponent(tapVip.name)}`}
                                                       className={`btn btn-secondary me-3 mb-3 ${item.server_name === server && tapVip.name === tap ? 'btn btn-warning' : ''}`}
                                                  >
                                                       {tapVip.name}
                                                  </a>
                                             ))}
                                        </div>
                                   ))}

                              </div>
                         </div>

                         <hr />

                         <div className="mb-4">
                              <div className="text-warning fw mb-2">
                                   <strong><i className="fe fe-hash"></i>Bình luận</strong>
                              </div>
                              <Comment />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default XemPhim;