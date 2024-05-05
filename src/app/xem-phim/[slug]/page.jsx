"use client"
import Link from "next/link"
import { useState, useEffect } from "react";

function XemPhim({ params }) {
     const [slug, setSlug] = useState(params.slug);
     const [movie, setMovie] = useState(null);
     console.log(slug);
     useEffect(() => {
          fetch(`https://phim.nguonc.com/api/film/${slug}`)
               .then((res) => res.json())
               .then((data) => {
                    setMovie(data);
                    console.log(data);
               });
     }, [slug])

     return ( 
          <div>
               <Link href="/phim/than-an-vuong-toa" className="btn btn-success">PHIM</Link>
               {params.slug}
          </div>
     );
}

export default XemPhim;