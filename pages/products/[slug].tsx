import Image from 'next/image'
import getProducts from '../../sfcc.js'

export default function Product({ product }) {
  return <>
    <div className='flex flex-col justify-between bg-sblue'>
      <a href='/sofy' className='text-xl p-2'>
        <span className='font-bold text-spink'>Sofy</span> <span className='text-syellow magz-no magz-second'>Piñatas</span>
      </a>
    </div>
    <div className="flex flex-col justify-between">
      <div className="mx-auto mt-5 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto flex flex-col sm:flex-row">
          <Image
            alt="coffee"
            className="rounded-lg"
            src={product.imageGroups[0].images[0].link}
            width={560}
            height={640}
          />
          <div className="mt-10 flex flex-col sm:mt-0 sm:ml-10">
            <h1 className="mt-1 text-4xl font-bold uppercase text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl">
              {product.name}
            </h1>
            {/* <h1 className="mt-3 text-4xl font-bold text-gray-500 sm:text-3xl sm:tracking-tight lg:text-3xl">
              ${product.price}
            </h1> */}
            <div className="mt-10 mb-5 border-t border-gray-200 pt-10 font-bold">
              Description
            </div>
            <p className="max-w-xl">{product.longDescription}</p>
            <br />
            <div>
              <a className="text-white bg-sorange hover:bg-sorange-2 focus:ring-4 focus:outline-none focus:ring-sorange-2 dark:focus:ring-sorange-2 font-medium rounded-lg text-base px-5 py-2.5 inline-flex justify-center w-full text-center"
                href={`https://api.whatsapp.com/send/?phone=5212251121397&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20pi%C3%B1ata%20${product.name}.`}
                target="_blank"
                rel="noreferrer">Lo quiero</a>
            </div>
          </div>
        </div>
      </div>
      <div className='chat-support__icon' />
    </div>
  </>
}

export async function getStaticProps({ params }) {
  const searchResults = await getProducts(params.slug)
  const coffeeProduct = searchResults[0]

  return {
    props: {
      product: coffeeProduct,
    },
  }
}

export async function getStaticPaths() {
  const coffeeProducts = await getProducts('coffee')
  let fullPaths = []

  for (let product of coffeeProducts) {
    fullPaths.push({ params: { slug: product.id } })
  }

  return {
    paths: fullPaths,
    fallback: false,
  }
}
