import Item from "@/components/page/tim-kiem/item";

const Page = async ({ searchParams }) => {
     const api = "https://phim.nguonc.com/api/films/search?keyword="
     const keyword = searchParams.q;

     if (keyword == undefined || keyword == "" || keyword == null ) {
          return
     }

     const res = await fetch(api + keyword);
     const data = await res.json();

     return (
          <>
               <div>
                    Nội dung tìm kiếm:  {keyword}
               </div>
               <div>
                    <Item data={data} />
               </div>
          </>
     )
}

export default Page;