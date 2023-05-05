export default function Pinatas() {

    return <>
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p
                    className="mt-1 text-4xl font-bold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl">
                    Piñata personalizada
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-spurple-2 dark:border-spurple-2">
                <h5 className="mb-4 text-xl font-medium text-white">Piñata Básica</h5>
                <div className="flex items-baseline text-gray-800 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">190.00</span>
                    <span className="ml-1 text-xl font-normal text-white">mxn</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Circular, 50cm diametro</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Metálica</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Imagen a elección</span>
                    </li>
                    {/* <li className="flex space-x-3 line-through decoration-white">
                    
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-white">Sketch Files</span>
                </li>
                <li className="flex space-x-3 line-through decoration-white">
                    
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-white">API Access</span>
                </li>
                <li className="flex space-x-3 line-through decoration-white">
                    
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-white">Complete documentation</span>
                </li>
                <li className="flex space-x-3 line-through decoration-white">
                    
                    <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-base font-normal leading-tight text-white">24×7 phone & email support</span>
                </li> */}
                </ul>
                {/* <button type="button" className="text-white bg-sorange hover:bg-sorange-2 focus:ring-4 focus:outline-none focus:ring-sorange-2 dark:focus:ring-sorange-2 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose package</button> */}
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-spurple-2 dark:border-spurple-2">
                <h5 className="mb-4 text-xl font-medium text-white">Piñata Chica</h5>
                <div className="flex items-baseline text-gray-800 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">230.00</span>
                    <span className="ml-1 text-xl font-normal text-white">mxn</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Circular, 50cm diametro</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Metálica</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Imagen a elección</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Foamy o papel</span>
                    </li>
                </ul>
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-spurple-2 dark:border-spurple-2">
                <h5 className="mb-4 text-xl font-medium text-white">Piñata Mediana</h5>
                <div className="flex items-baseline text-gray-800 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">290.00</span>
                    <span className="ml-1 text-xl font-normal text-white">mxn</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Circular, 80cm diametro</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Metálica</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Imagen a elección</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Foamy o papel</span>
                    </li>
                </ul>
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-spurple-2 dark:border-spurple-2">
                <h5 className="mb-4 text-xl font-medium text-white">Piñata Jumbo</h5>
                <div className="flex items-baseline text-gray-800 dark:text-white">
                    <span className="text-3xl font-semibold">$</span>
                    <span className="text-5xl font-extrabold tracking-tight">560.00</span>
                    <span className="ml-1 text-xl font-normal text-white">mxn</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Circular, 1m. diametro</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Metálica</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Imagen a elección</span>
                    </li>
                    <li className="flex space-x-3">
                        {/* <!-- Icon --> */}
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        <span className="text-base font-normal leading-tight text-white">Foamy o papel</span>
                    </li>
                </ul>
            </div>
        </div >
    </>
}