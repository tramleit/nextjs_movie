import Item from '@/components/template/the-loai/item';

const QuocGia = async ({ params, searchParams }) => {
     const api = "https://phim.nguonc.com/api/films/quoc-gia/"
     const slug = params.slug;
     const page = searchParams.page || 1;
     const res = await fetch(`${api + slug}?page=${page}`);
     const data = await res.json();
     const movies = data.items;
     const paginate = data.paginate;

     return ( 
          <>
               Quốc gia:  {slug}
               <Item movies={movies} paginate={paginate}/>
          </>
     );
}

export default QuocGia