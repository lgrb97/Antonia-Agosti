import React from "react"
import logo from '../imagenes/logo.png';

const NavBar = () => {
    return(
        <>
        <div className="Container">
            <div className="BarraNavegacion">
                <img className="ImgLogo" src={logo}/>
                <ul>
                    <li><a className="navegacion" href="#">Carteras</a></li>
                    <li><a className="navegacion" href="#">Mochilas</a></li>
                    <li><a className="navegacion" href="#">Billeteras</a></li>
                    <li><a className="navegacion" href="#">Carrito</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavBar;