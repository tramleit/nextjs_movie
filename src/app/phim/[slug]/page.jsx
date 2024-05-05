"use client"

import Link from "next/link"
import Test from "./components/test"
import { useState, useEffect } from "react";

export default function Page({ params }) {

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
               <Test />
                    <Link href="/xem-phim/than-an-vuong-toa" className="btn btn-success">XEM PHIM</Link>
                    {params.slug}
          </div>
     )
}
