import Script from "next/script";
import Head from "next/head";
import AppHeader from "@/components/layouts/header";
import AppSearch from "@/components/template/search";
import AppFooter from "@/components/layouts/footer";
import "../assets/css/main.css";
import "../assets/css/navbar.css";
import "../assets/css/theme.min.css";
import "../assets/feather/feather.css";
import "../assets/css/owl.carousel.min.css";

export const metadata = {
  title: "Xem phim online miễn phí",
  description: "Phimmoi ⚡ Phim HD VietSub | Phim Lẻ | Phim Bộ | Phim Chiếu Rạp | Xem phim Online miễn phí",
  imageUrl: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/381271892_805928278202949_6388609339400536337_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YFb859k94L8Q7kNvgEyV2nL&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAxzB7t6FbhZPtOvgKvxggnMuv_greJ9Ge85i9sJVLKBw&oe=663DB2D2",
};

export default function RootLayout({ children }) {
  const url = 'vudebweb.com';
  // console.log(url);
  return (
    <html lang="vi" data-theme="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="phimmoi, phim, xem phim, xem phim online, phim online, xem phim hd, phim vietsub, phim thuyet minh," />
        <meta name="image" content={metadata.imageUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metadata.imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.imageUrl} />
        <link rel="canonical" href={url} />
        <link rel="icon" href={metadata.imageUrl} sizes="any" />
        <link rel="shortcut icon" href={metadata.imageUrl} type="image/x-icon" />
        <title>{metadata.title}</title>
      </Head>

      <body className="container">
        <AppHeader />
        <main className="mt-17">
          <AppSearch />
          {children}
        </main>
        <AppFooter />

        <Script src="/js/jquery-3.5.1.slim.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/theme.min.js" strategy="beforeInteractive" />
        <Script src="/js/smooth-scrollbar.js" strategy="beforeInteractive" />
        <Script src="/js/mode.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
