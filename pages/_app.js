import Layout from '../components/Layout';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import Script from 'next/script';




function MyApp({ Component, pageProps }) {

  /* function for remove the loader */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);

  // Handle width & scroll changes
  const [width, setWidth] = useState(null);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    setScroll(window.scrollY);


    let handleResize = debounce(() => setWidth(window.innerWidth), 10);
    let handleScroll = debounce(() => setScroll(window.scrollY), 10);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }

  }, []);



  // Handle Scroll To Top Button
  useEffect(() => {
    const showScrollTopBtn = () => {
      if (scroll > 70 && width > 439) {
        document.getElementById('scroll-top-top').style.display = "flex";
      }
      else {
        document.getElementById('scroll-top-top').style.display = "none";
      }
    }

    window.addEventListener('scroll', showScrollTopBtn);

    return () => {
      window.removeEventListener('scroll', showScrollTopBtn);
    }
  }, [width, scroll]);

  // Handle show side menu
  useEffect(() => {
    if (scroll > 70 && width > 990) {
      document.getElementById("side-menu").style.display = "flex";
    } else if (width <= 990) {
      document.getElementById("side-menu").style.display = "flex";
    } else {
      document.getElementById("side-menu").style.display = "none";
    }
  }, [scroll, width])




  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  /* Hnadle Scroll To section */
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    window.scrollTo({ top: document.getElementById(id).offsetTop - 127 });
  };


  const onLinkClick = (e) => {
    if (typeof window !== "undefined") {
      e.preventDefault();
      const goto = e.target.getAttribute('goto');
      setTimeout(() => {
        scrollTo(goto);
      }, 100);
      setOpen(false);
      document.querySelector('body').style.overflowY = "auto";
      document.getElementById("hero-img").style.zIndex = 'unset';
      if (scroll < 70) {
        document.getElementById("side-menu").style.display = "none";
        document.getElementById("scroll-top-top").style.display = "none";
      }
    }

  }
  /* End Hnadle Scroll To section */

  // Just a comment to triger a new deployment on vercel to updat vercel environment variables in pruduction to include Google analytics ID
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Layout
        open={open}
        setOpen={setOpen}
        onLinkClick={onLinkClick}
        scroll={scroll}
        width={width}
        >
        <Component {...pageProps} onLinkClick={onLinkClick} width={width} />
        <button id='scroll-top-top' className={styles.scrollToTop} onClick={topFunction}>
          <div />
        </button>
      </Layout>
    </>
  )
}

export default MyApp
