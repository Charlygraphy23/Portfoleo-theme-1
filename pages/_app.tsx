import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import ContextProvider from '../store/provider';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContextProvider>
);

export default MyApp;
