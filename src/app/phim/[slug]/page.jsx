import { useRouter } from 'next/router';

function Phim() {
     // get params from url
     const router = useRouter();
     const { slug } = router.query;
     console.log(slug);
     return ( 
          <div></div>
     );
}

export default Phim;
