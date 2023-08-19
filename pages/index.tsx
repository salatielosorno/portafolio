import { useRef } from 'react'
import Header from '../components/Header'
import Pinatas from '../components/Pinatas'
import Packages from '../components/Packages'
import ProductCard from '../components/ProductCard'
import getProducts from '../sfcc.js'
import NavBar from '../components/Navbar'

export default function Gallery({ data }) {
  let coffeeRef = useRef<HTMLParagraphElement>()

  const scrollHandler = (e) => {
    e.preventDefault()
    // @ts-ignore
    coffeeRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Header scrollHandler={scrollHandler} />
        <div id='pinatas' className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p
                className="mt-1 text-4xl font-bold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl"
                ref={coffeeRef}
              >
                Hechas a mano para ti.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data &&
              data.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
          <Pinatas />
          <Packages />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const searchResults = await getProducts('coffee')

  return {
    props: {
      data: searchResults,
    },
  }
}
