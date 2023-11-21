import React from "react"
import "./tablero.css"

function Tablero(props){
    return(
        <div className="tablero">
            {props.children}
        </div>
    )
}

export {Tablero}