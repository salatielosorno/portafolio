import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'
import { Montserrat, Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sofy Piñatas</title>
      </Head>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
