import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Todo para tu fiesta. Piñatas, Recuerdos y Decoración" />
        <meta name="keywords" content="piñatas, fiesta, ideas para fiesta, idea de piñata, decoracion, decoración, ideas de pinatas" />

        {/* <!--  Essential META Tags --> */}
        <meta property="og:title" content="Todo para tu fiesta. Piñatas, Recuerdos y Decoración" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://piñatas.com/images/-pinatas.png" />
        <meta property="og:url" content="http://piñatas.com" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta property="og:description" content="Todo para tu fiesta. Piñatas, Recuerdos y Decoración" />
        <meta property="og:site_name" content="Piñatas Sofy" />
        <meta name="twitter:image:alt" content="Todo para tu fiesta. Piñatas, Recuerdos y Decoración" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        {/* <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@website-username" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
