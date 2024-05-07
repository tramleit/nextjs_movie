"use client"

import React, { useState, useEffect } from 'react';
import Header from './components/header';

const AppHeader = () => {
     const [countries, setCountries] = useState([]);
     const [genres, setGenres] = useState([]);
     const [years, setYears] = useState([]);

     useEffect(() => {
          const fetchData = async () => {
               // const api = 'https://phim.nguonc.com/api/';

               // const getData = async (url) => {
               //      const res = await fetch(url);
               //      const data = await res.json();
               //      return data;
               // }

               // const allC = await getData(`${api}quoc-gia`);
               // const allG = await getData(`${api}the-loai`);
               // console.log(allG);
               const years = getYear();

               // setCountries(allC);
               // setGenres(allG);
               setYears(years);

          };

          fetchData();
     }, []);

     const getYear = () => {
          const year = new Date().getFullYear();
          const years = [];
          for (let i = 0; i <= 30; i++) {
               years.push(year - i);
          }
          return years;
     }

     return (
          <Header countries={countries} genres={genres} years={years} />
     );
};

export default AppHeader;
