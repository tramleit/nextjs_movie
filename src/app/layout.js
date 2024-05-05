
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
  description: "Xem phim online miễn phí tại vudevweb.com ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
