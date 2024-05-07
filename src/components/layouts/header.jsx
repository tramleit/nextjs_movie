
import Header from './components/header';
const AppHeader = async () => {
     const api = 'https://phim.nguonc.com/api/';
          const getData = async (url) => {
               const res = await fetch(url);
               const data = await res.json();
               return data;
          }
          const countries = await getData(`${api}quoc-gia`);
          const pageC = countries.paginate.total_page
          const allC = []
          for (let i = 1; i <= pageC; i++) {
               const data = await getData(`${api}quoc-gia?page=${i}`);
               allC.push(data.items)
          }
          const genres = await getData(`${api}the-loai`);
          const pageG = genres.paginate.total_page
          const allG = []
          for (let i = 1; i <= pageG; i++) {
               const data = await getData(`${api}the-loai?page=${i}`);
               allG.push(data.items)
          }

          const getYear = () => {
               const year = new Date().getFullYear();
               const years = [];
               for (let i = 0; i <= 30; i++) {
                    years.push(year - i);
               }
               return years;
          }
     return (
          <Header countries={allC.flat()} genres={allG.flat()} years={getYear()} />
     );
};
export default AppHeader;