import Layout from '@/components/layout/layout'
import '@/styles/globals.css'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  )
}
