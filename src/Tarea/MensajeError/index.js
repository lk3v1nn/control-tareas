import React from "react";
import { Alert } from "./AlertSVG";

import "./mensajeError.css";

function MensajeError() {
    return (
        <div className="containerMensajeError">
            <h3 className="textMensajeError">¡¡ ha ocurrido un error !! <span className="text2MensajeError">recargue la pagina.</span></h3>
            <Alert tamaño='35px' color1='yellow' color2='black'/>
        </div>
    );
}

export { MensajeError };
