import Item from '@/components/page/the-loai/item';

export const metadata = {
     title: "Thể loại phim",
     description: "Phimmoi ⚡ Phim HD VietSub | Phim Lẻ | Phim Bộ | Phim Chiếu Rạp | Xem phim Online miễn phí",
};

const TheLoai = async ({ params, searchParams }) => {
     const api = "https://phim.nguonc.com/api/films/the-loai/"
     const slug = params.slug;
     const page = searchParams.page || 1;
     const res = await fetch(`${api + slug}?page=${page}`);
     const data = await res.json();
     const movies = data.items;
     const paginate = data.paginate;

     return ( 
          <>
               Thể loại:  {slug}
               <Item movies={movies} paginate={paginate}/>
          </>
     );
}

export default TheLoai