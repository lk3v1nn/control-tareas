import React from "react";
import "./Nuevo.css";
import { contextTareas } from "../ContextTarea";

function TareaNueva() {
    const { setMostrarModalNuevoForm } = React.useContext(contextTareas);

    return <button className="buttonNuevo" onClick={() => setMostrarModalNuevoForm(true)}>+</button>;
}

export { TareaNueva };
