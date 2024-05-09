import Item from '@/components/page/the-loai/item';

const NamPhatHanh = async ({ params, searchParams }) => {
     const api = "https://phim.nguonc.com/api/films/nam-phat-hanh/"
     const slug = params.slug;
     const page = searchParams.page || 1;
     const res = await fetch(`${api + slug}?page=${page}`);
     const data = await res.json();
     const movies = data.items;
     const paginate = data.paginate;

     return ( 
          <>
               Năm phát hành:  {slug}
               <Item movies={movies} paginate={paginate}/>
          </>
     );
}

export default NamPhatHanh