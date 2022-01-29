import React from "react"
import { useState, useEffect } from "react";


const ItemCount = () => {
    const [count, setCount] = useState (0);

    const Desactivacion = () => {
        if (count == 0) {
            setCount (count - 0 );
        } else { 
            setCount (count - 1);
        }
    }
    return (
        <div id="carrito">
            <h2>Carrito</h2>
            <div>
                <button className="boton" onClick={Desactivacion}>-</button>
                <spam>{count}</spam>
                <button className="boton" onClick={ () => setCount (count + 1) }>+</button>
            </div>
        </div>
    )
}

export default ItemCount;