
import Script from "next/script";
import Head from "next/head";

import "../assets/css/main.css";
import "../assets/css/theme.min.css";


export const metadata = {
  title: "Xem phim online miễn phí",
  description: "Xem phim online miễn phí tại vudevweb.com ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className="container">
        
        {children}



        <Script src="/js/jquery-3.5.1.slim.min.js"  strategy="lazyOnload"/>
        <Script src="/js/bootstrap.bundle.min.js"  strategy="lazyOnload"/>
        <Script src="/js/bootstrap.min.js"  strategy="lazyOnload"/>
      </body>
    </html>
  );
}
