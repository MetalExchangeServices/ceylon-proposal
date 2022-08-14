import '../styles/globals.css'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    var hightPc = window.outerHeight / 35;
    document.getElementsByTagName("html")[0].style.fontSize = hightPc + 'px';
  }
  return <Component {...pageProps}/>
}

export default MyApp
