import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const isLoggedIn = true; // Cambia este valor según tu lógica de autenticación

  return (
    <>
      <Head>
        <title>Empleotecnic.com</title>
        <link rel="icon" href="/icons/minimal.png" />
      </Head>

      <Layout isLoggedIn={isLoggedIn}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}