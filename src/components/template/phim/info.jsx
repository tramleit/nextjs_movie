'use client';
import Image from "next/image";
import { QRCode, Space } from "antd";

const Info = ({ movie }) => {
     const url = window.location.href;
     console.log(url);
     return (
          <div className="mt-5">
               <div className="row">
                    <div className="col-12">
                         <div>
                              <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                                   <li className="nav-item" role="presentation">
                                        <a className="nav-link text-dark active fw" id="ex3-tab-1" data-bs-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">Thông tin</a>
                                   </li>
                                   <li className="nav-item" role="presentation">
                                        <a className="nav-link text-dark fw" id="ex3-tab-2" data-bs-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">Nội dung phim</a>
                                   </li>
                                   <li className="nav-item" role="presentation">
                                        <a className="nav-link text-dark fw" id="ex3-tab-3" data-bs-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">Các tập phim</a>
                                   </li>
                              </ul>
                              <div className="tab-content" id="ex2-content">
                                   <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                        <div className="row p-3">
                                             <div className="col-3">
                                                  <img src={movie.thumb_url} width="100%" alt={movie.name} className="rounded-2" style={{ objectFit: "cover" }} />
                                             </div>
                                             <div className="col-6">
                                                  <div className="text-center">
                                                       <h1 className="text-warning">{movie.name}</h1>
                                                  </div>
                                                  <div className="row">
                                                       <ul className="text-dark col-6">
                                                            <li><p><strong>Tên phim : </strong>{movie.name} </p></li>
                                                            <li><p><strong>Tên chính thức : </strong>{movie.original_name} </p></li>
                                                            <li><p><strong>Trạng thái : </strong>{movie.current_episode} </p></li>
                                                            <li><p><strong>Số tập : </strong>{movie.total_episodes} </p></li>
                                                            <li><p><strong>Chất Lượng : </strong>{movie.quality} </p></li>
                                                            <li><p><strong>Ngôn Ngữ : </strong>{movie.language} </p></li>
                                                            <li><p><strong>Đạo diễn : </strong>{movie.director} </p></li>
                                                       </ul>
                                                       <ul className="text-dark col-6">
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
                                                  <div className="d-flex justify-content-center">
                                                       {movie.episodes.map((item, index) => (
                                                            <div key={index} className="mt-3 text-center">
                                                                 {item.items.slice(0, 1).map((tap, i) => (
                                                                      <a href={`/xem-phim/${movie.slug}?server=${encodeURIComponent(item.server_name)}&tap=${tap.name}`} className="btn btn-warning me-3" key={i}> Xem phim {item.server_name} </a>
                                                                 ))}
                                                            </div>
                                                       ))}
                                                  </div>
                                             </div>
                                             <div className="col-3 ">
                                                  <div className="card text-center mt-0">
                                                       <div className="d-flex justify-content-center mt-3">
                                                            <QRCode
                                                                 type="canvas"
                                                                 value={url}
                                                                 color={"#fff"}
                                                                 size={250}
                                                            />
                                                       </div>
                                                       <div>
                                                            <p className="text-warning">Quét mã để xem trên điện thoại</p>
                                                       </div>
                                                  </div>
                                             </div>
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
     )
}

export default Info