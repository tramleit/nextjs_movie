import Info from "@/components/template/phim/info"
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const Page = async ({ params }) => {
     const slug = params.slug
     const res = await fetch(`https://phim.nguonc.com/api/film/${slug}`)
     const data = await res.json()
     const movie = data.movie
     

     return (
          <>
               <Breadcrumb style={{color: 'white'}}
                    items={[
                         {
                              href: '/',
                              title: <HomeOutlined />,
                         },
                         {    
                              title: movie.name,
                         },
                    ]}
               />
               <Info movie={movie} />
          </>

     )
}

export default Page
