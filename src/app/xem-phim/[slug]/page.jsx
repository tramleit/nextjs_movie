import { useRouter } from 'next/router';

function XemPhim() {
     // get params from url
     const router = useRouter();
     const { slug } = router.query;
     console.log(slug);
     return ( 
          <div></div>
     );
}

export default XemPhim;