import Image from 'next/image'
import img from '../public/images/confeti.png'
import logo from '../public/images/sofy-pinatas-2024.png';
import wave from '../public/images/wave.png'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden h-screen mt--mobile">
          <div className="relative px-4 pt-16 sm:pb-6 sm:pt-24 lg:pt-32 lg:px-8 flex justify-center	">
            <Image id='logo' width={800} src={logo} alt="Sofy Piñatas" className='h-2/4 lg:w-3/5 xl:w-2/5' />
          </div>
          <div className='md:hidden'>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-5xl  font-semibold tracking-wide text-orange-600">
              <span className="block text-white legend--text-shadow">La vida es mejor con una piñata.</span>
              {/* <span className="block text-white font-medium legend--text-shadow"></span> */}
            </p>
          </div>
          <div>
            <Image
              priority
              fill
              className="confeti"
              src={img}
              placeholder="blur"
              alt="Sofy Piñatas"
            />

          </div>
          <div>
            <Image
              priority
              fill
              className="wave"
              src={wave}
              placeholder="blur"
              alt="Sofy Piñatas"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
