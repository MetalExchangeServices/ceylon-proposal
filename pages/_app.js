import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    var hightPc = window.outerHeight / 35;
    document.getElementsByTagName("html")[0].style.fontSize = hightPc + 'px';
  }
  // if (typeof window !== "undefined") {
  //   if (window.outerWidth < 450) {
  //     var hightMobile = window.outerHeight / 35;
  //     document.getElementsByTagName("html")[0].style.fontSize = hightMobile + 'px';
  //     console.log(1)
  //   } else if (window.outerWidth < 800) {
  //     var hightTalet = window.outerHeight / 35;
  //     document.getElementsByTagName("html")[0].style.fontSize = hightTalet + 'px';
  //     console.log(2)
  //   } else if (window.outerWidth < 1200) {
  //     var hightLaptop = window.outerHeight / 35;
  //     document.getElementsByTagName("html")[0].style.fontSize = hightLaptop + 'px';
  //     console.log(3)
  //   } else {
  //     var hightPc = window.outerHeight / 35;
  //     document.getElementsByTagName("html")[0].style.fontSize = hightPc + 'px';
  //     console.log(4)
  //   }
// }

return <Component {...pageProps} />
}

export default MyApp
