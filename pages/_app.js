import 'bootstrap/dist/css/bootstrap.css';
import NextNProgress from 'nextjs-progressbar'


function MyApp({ Component, pageProps }) {
  return <>
  <NextNProgress height={5} options={{ easing: "ease", speed: 500, showSpinner: false }} />
  <Component {...pageProps} />
  </>
}

export default MyApp
