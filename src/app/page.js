/* eslint-disable @next/next/no-img-element */
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Slider from "react-slick";
import DanhMucPhim from "@/components/template/danhMuc"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [newMovie, setNewMovie] = useState([]);
  const [phimLe, setPhimLe] = useState([]);
  const [phimBo, setPhimBo] = useState([]);
  const [phimHoatHinh, setPhimHoatHinh] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [phimDangChieu, setPhimDangChieu] = useState([]);
  const [loading, setLoading] = useState(true);


  const getNewPhim = async () => {
    const res = await fetch(`https://phim.nguonc.com/api/films/phim-moi-cap-nhat?page=2`);
    const data = await res.json()
    setNewMovie(data.items)
    setLoading(false);
  }

  const getPhimLe = async () => {
    const res = await fetch('https://phim.nguonc.com/api/films/danh-sach/phim-le?page=2')
    const data = await res.json()
    setPhimLe(data.items)
    setLoading(false)
  }

  const getPhimBo = async () => {
    const res = await fetch('https://phim.nguonc.com/api/films/danh-sach/phim-bo?page=2')
    const data = await res.json()
    setPhimBo(data.items)
    setLoading(false)
  }

  const getHoatHinh = async () => {
    const res = await fetch(`https://phim.nguonc.com/api/films/danh-sach/hoat-hinh?page=2`)
    const data = await res.json()
    setPhimHoatHinh(data.items)
    setLoading(false)
  }

  const getPhimDangChieu = async () => {
    const res = await fetch(`https://phim.nguonc.com/api/films/danh-sach/phim-dang-chieu?page=2`);
    const data = await res.json()
    setPhimDangChieu(data.items)
    setLoading(false)
  }

  const getTvShow = async () => {
    const res = await fetch(`https://phim.nguonc.com/api/films/danh-sach/tv-shows?page=2`)
    const data = await res.json()
    setTvShow(data.items)
    setLoading(false)
  }


  useEffect(() => {
    getNewPhim()
    getPhimLe()
    getPhimBo()
    getHoatHinh()
    getPhimDangChieu()
    getTvShow()
  },[])



  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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

      {/* PHIM MỚI NHẤT */}
      <DanhMucPhim movies={newMovie} categoryTitle="PHIM MỚI NHẤT" />


      {/* PHIM LẺ */}
      <DanhMucPhim movies={phimLe} categoryTitle="PHIM LẺ" />


      {/* PHIM BỘ */}
      <DanhMucPhim movies={phimBo} categoryTitle="PHIM BỘ" />

      {/* PHIM HOẠT HÌNH */}
      <DanhMucPhim movies={phimHoatHinh} categoryTitle="PHIM HOẠT HÌNH" />

      {/* PHIM ĐANG CHIẾU */}
      <DanhMucPhim movies={phimDangChieu} categoryTitle="PHIM ĐANG CHIẾU" />

      {/* TV SHOW */}
      <DanhMucPhim movies={tvShow} categoryTitle="TV SHOW" />

    </div>
  );
}

