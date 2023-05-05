import Image from 'next/image'
import img from '../public/sofy-pinatas-background.png'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Sofy Piñatas"
            />
            
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="mt-1 text-center font-bold text-gray-900 sm:tracking-tight text-7xl lg:text-9xl">
              <span className='font-bold text-spink block magz magz-first'>Sofy</span> <span className='text-syellow block magz-no magz-second'>Piñatas</span>
            </h1>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl  font-semibold tracking-wide text-orange-600">
              <span className="block text-white">La vida es mejor con una</span>
              <span className="block text-white font-medium">piñata.</span>
            </p>

           {/*  <div className="mx-auto mt-10 max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                onClick={scrollHandler}
              >
                Shop piñata
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
