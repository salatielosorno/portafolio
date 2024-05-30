import Link from "next/link"

const BuildPriceItem = ({ text }) => {
    return <>
        <li className="flex items-center">
            <svg className="flex-shrink-0 w-4 h-4 text-rosa" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-200 ms-3">{text}</span>
        </li>
    </>
}

export const PricingCard = ({ packageLink, packageItems, price, oldPrice = undefined, packageName }) => {
    return <>
        <div className="w-full max-w-sm p-4 border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-300">{packageName}</h5>
            <div className="flex items-baseline text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                <span className="ms-1 text-xl font-normal text-gray-200">mxn</span>
            </div>
            {
                oldPrice &&
                <div className="flex items-baseline text-white line-through">
                    <span className="text-lg font-semibold">$</span>
                    <span className="text-lg font-extrabold tracking-tight">{oldPrice}</span>
                    <span className="ml-1 text-xl font-normal text-white">mxn</span>
                </div>
            }
            <ul role="list" className="space-y-5 my-7">
                {packageItems.map((element: any) => <BuildPriceItem text={element.text} />)}
            </ul>
            <a className="text-white bg-rosa cursor-pointer hover:bg-rosa focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                target="_blank"
                href={packageLink}
                rel="noreferrer">Lo quiero</a>

        </div>

    </>
}

export default function Pinatas() {

    return <>
        <div id='personalizar' className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p
                    className="mt-1 text-4xl font-bold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-5xl">
                    Piñata personalizada
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <PricingCard packageName="Piñata Básica" price="189.99" packageItems={[{ text: "Circular, 50cm diametro" }, { text: "Metálica" }, { text: "Imagen a elección" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Pi%C3%B1ata%20B%C3%A1sica." />
            <PricingCard packageName="Piñata Chica" price="229.99" packageItems={[{ text: "Circular, 50cm diametro" }, { text: "Metálica" }, { text: "Imagen a elección" }, { text: "Foamy o papel" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Pi%C3%B1ata%20Chica." />
            <PricingCard packageName="Piñata Mediana" price="289.99" packageItems={[{ text: "Circular, 80cm diametro" }, { text: "Metálica" }, { text: "Imagen a elección" }, { text: "Foamy o papel" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Pi%C3%B1ata%20Mediana." />
            <PricingCard packageName="Piñata Jumbo" price="559.99" packageItems={[{ text: "Circular, 1m. diametro" }, { text: "Metálica" }, { text: "Imagen a elección" }, { text: "Foamy o papel" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20Pi%C3%B1ata%20Jumbo." />
        </div >
    </>
}