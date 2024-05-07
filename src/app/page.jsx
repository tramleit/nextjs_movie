/* eslint-disable @next/next/no-img-element */
import Item from "@/components/template/home/item";

const Home = async () => {
const api = "https://phim.nguonc.com/api/films/"
  const getMovie = async (url) => {
    const res = await fetch(`${api}${url}`);
    const data = await res.json();
    return data.items;
  }

  const newMovie = await getMovie("phim-moi-cap-nhat?page=1");
  const phimLe = await getMovie("danh-sach/phim-le?page=1");
  const phimBo = await getMovie("danh-sach/phim-bo?page=1");
  const phimHoatHinh = await getMovie("danh-sach/hoat-hinh?page=1");
  const phimDangChieu = await getMovie("danh-sach/phim-dang-chieu?page=1");
  const tvShow = await getMovie("danh-sach/tv-shows?page=1");

  return (
    <div>
      <Item movies={newMovie} categoryTitle="PHIM MỚI NHẤT" />
      <Item movies={phimLe} categoryTitle="PHIM LẺ" />
      <Item movies={phimBo} categoryTitle="PHIM BỘ" />
      <Item movies={phimHoatHinh} categoryTitle="PHIM HOẠT HÌNH" />
      <Item movies={phimDangChieu} categoryTitle="PHIM ĐANG CHIẾU" />
      <Item movies={tvShow} categoryTitle="TV SHOW" />
    </div>
  );
}

export default Home;
