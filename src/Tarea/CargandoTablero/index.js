import React from "react"
import './cargandoTablero.css'
import { CargandoContador } from "../CargandoContador"

function CargandoTablero() {
    return(
        <div className="cargandoTablero animacionCargandoClaro">
            <CargandoContador/>
        </div>
    )
}

export {CargandoTablero}