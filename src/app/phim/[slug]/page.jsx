import Test from "./components/test"
export default function Page({ params }) {

     return (
          <>
               <Test />
               {params.slug}
          </>
     )
}
