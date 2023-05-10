import '../styles/globals.css'
import Footer from '../components/Footer'
import Head from 'next/head'
import { Montserrat, Quicksand } from 'next/font/google'
import Script from 'next/script'

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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-412BS5HS4T"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-412BS5HS4T');
        `}
      </Script>
      <main className={`${quicksand.variable} font-sans`}>
        <Component {...pageProps} />
        <div className='chat-support__icon' />
        <Footer />
      </main>
    </>
  )
}
