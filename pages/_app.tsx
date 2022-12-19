import Head from 'next/head';
import GlobalStyle from '../components/GlobalStyle.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href='../assets/img/ariellogo.ico' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
