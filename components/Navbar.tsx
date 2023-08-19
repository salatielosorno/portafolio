import { useState } from "react"

export default function NavBar() {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }

    const navlistactive = 'navbar__list--active';
    const bariconclose = 'bar-icon--close';

    return <>
        <div className="movil sticky top-0 z-50 opacity-90">
            <div id="menu-movil" className={`bar-icon ${active ? bariconclose : ''}`} onClick={onClick}>
                <span className="line">&nbsp;</span>
                <span className="line">&nbsp;</span>
                <span className="line">&nbsp;</span>
            </div>
            <div className="navbar z-50">
                <ul className={`navbar__list ${active ? navlistactive : ''}`}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#pinatas">Piñatas</a></li>
                    <li><a href="#personalizar">Personalizar</a></li>
                    <li><a href="#paquetes">Paquetes</a></li>
                </ul>
            </div>
        </div>
        <div className="navbar md:sticky md:top-0 z-50 opacity-90">
            <ul className={`navbar__list`}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#pinatas">Piñatas</a></li>
                <li><a href="#personalizar">Personalizar</a></li>
                <li><a href="#paquetes">Paquetes</a></li>
            </ul>
        </div>
    </>
}