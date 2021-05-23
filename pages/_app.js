import '../src/style/styles.scss';
import Head from 'next/head';
import PageTemplate from '../src/components/shared/PageTemplate/PageTemplate';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Audiophile e-commerce website</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </>
  );
}
