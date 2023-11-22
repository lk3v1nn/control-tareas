import './cargandoContador.css'
import '../cargandoSkeleton.css'

import React from "react"

function CargandoContador(){
    return(
        <>
        <p className="textCargandoContador animacionCargandoOscuro"></p>
        <div className="buttonCargandoContador animacionCargandoOscuro"></div>
        </>
    )
}

export {CargandoContador}