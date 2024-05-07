import Script from "next/script";
import { Suspense } from "react";
import AppHeader from "@/components/layouts/header";
import AppSearch from "@/components/template/search";
import AppFooter from "@/components/layouts/footer";
import Loading from "@/components/layouts/loading";

import "@/assets/css/main.css";
import "@/assets/css/navbar.css";
import "@/assets/css/theme.min.css";
import "@/assets/feather/feather.css";
import "@/assets/css/owl.carousel.min.css";
import "@/assets/css/cusPagination.css";

export const metadata = {
  title: "Xem phim online miễn phí",
  description: "Phimmoi ⚡ Phim HD VietSub | Phim Lẻ | Phim Bộ | Phim Chiếu Rạp | Xem phim Online miễn phí",
};

export default function RootLayout({ children }) {
  const url = 'vudebweb.com';
  // console.log(url);
  return (
    <html lang="vi" data-theme="dark">

      <body className="container">
        <Suspense fallback={<Loading />}>
          <AppHeader />
          <main className="mt-3">
            {children}
          </main>
          <AppFooter />
        </Suspense>


          <Script src="/js/jquery-3.5.1.slim.min.js" strategy="beforeInteractive" />
          <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
          <Script src="/js/theme.min.js" strategy="beforeInteractive" />
          <Script src="/js/smooth-scrollbar.js" strategy="beforeInteractive" />
          <Script src="/js/mode.js" strategy="beforeInteractive" />


      </body>
    </html>
  );
}
