import React from "react"
import logo from '../imagenes/logo.png';
import CartWidget from "./CartWidget";

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
                    <li><CartWidget/></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default NavBar;