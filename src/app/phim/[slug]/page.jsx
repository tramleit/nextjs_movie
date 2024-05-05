/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import Test from "./components/test"
import { useState, useEffect } from "react";



export default function Page({ params }) {

     const [slug, setSlug] = useState(params.slug);
     const [movie, setMovie] = useState([]);
     const [loading, setLoading] = useState(true);

     console.log(slug);

     const getMovie = async () => {
          const res = await fetch(`https://phim.nguonc.com/api/film/${slug}`)
          const data = await res.json()
          setMovie(data.movie)
          setLoading(false)
          console.log(data.movie);
          document.title = data.movie.name
     }

     useEffect(() => {
          getMovie()
     }, [slug])

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
          <>
               <div className="card">
                    <div className="card-body row">
                         <div className="col-3">
                              <div>
                                   <img src={movie.thumb_url} width="100%" alt={movie.name} className="rounded-2" style={{ objectFit: "cover" }} />
                              </div>

                              {movie.episodes.map((item, index) => (
                                   <div key={index} className="mt-3 text-center">
                                        {item.items.slice(0, 1).map((tap, i) => (
                                             <a href={`/xem-phim/${movie.slug}?server=${encodeURIComponent(item.server_name)}&tap=${tap.name}`} className="btn btn-warning me-3" key={i}> Xem phim {item.server_name} </a>
                                        ))}
                                   </div>
                              ))}

                         </div>
                         <div className="col-9">
                              <div>
                                   <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                                        <li className="nav-item" role="presentation">
                                             <a className="nav-link active text-warning fw" id="ex3-tab-1" data-bs-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">Thông tin</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                             <a className="nav-link text-warning fw" id="ex3-tab-2" data-bs-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">Nội dung phim</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                             <a className="nav-link text-warning fw" id="ex3-tab-3" data-bs-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">Các tập phim</a>
                                        </li>
                                   </ul>
                                   <div className="tab-content" id="ex2-content">
                                        <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                             <div className="row p-3">
                                                  <ul className="text-warning col-6">
                                                       <li><p><strong>Tên phim : </strong>{movie.name} </p></li>
                                                       <li><p><strong>Tên chính thức : </strong>{movie.original_name} </p></li>
                                                       <li><p><strong>Trạng thái : </strong>{movie.current_episode} </p></li>
                                                       <li><p><strong>Số tập : </strong>{movie.total_episodes} </p></li>
                                                       <li><p><strong>Chất Lượng : </strong>{movie.quality} </p></li>
                                                       <li><p><strong>Ngôn Ngữ : </strong>{movie.language} </p></li>
                                                       <li><p><strong>Đạo diễn : </strong>{movie.director} </p></li>
                                                  </ul>
                                                  <ul className="text-warning col-6">

                                                       <li><p><strong>Diễn viên : </strong>{movie.casts} </p></li>
                                                       {Object.values(movie.category).map((item, index) => (
                                                            <li key={index}>
                                                                 <p>
                                                                      <strong>{item.group.name}: </strong>
                                                                      {item.list.map((subItem, subIndex) => (
                                                                           <span key={subIndex}>{subItem.name}</span>
                                                                      ))}
                                                                 </p>
                                                            </li>
                                                       ))}
                                                       <li><p><strong>Thời lượng : </strong>{movie.time} </p></li>
                                                       <li><p><strong>Ngày tạo : </strong>{movie.created} </p></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                             <div className="p-3">
                                                  <p className="text-warning">{movie.description}</p>
                                             </div>
                                        </div>
                                        <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">
                                             <div className="p-3">
                                                  {movie.episodes.map((item, index) => (
                                                       <div key={index}>
                                                            <div className="text-warning"> <strong>Server: </strong>{item.server_name}</div>
                                                            {item.items.map((tap, i) => (
                                                                 <a href={`/xem-phim/${movie.slug}?server=${encodeURIComponent(item.server_name)}&tap=${tap.name}`} className="btn btn-secondary me-2 mt-2" key={i}> {tap.name} </a>
                                                            ))}
                                                       </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </>

     )
}
