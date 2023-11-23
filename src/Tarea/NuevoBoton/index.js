import React from "react";
import "./Nuevo.css";
import { contextTareas } from "../ContextTarea";

function TareaNueva() {
    const { setMostrarModal } = React.useContext(contextTareas);

    return <button className="buttonNuevo" onClick={() => setMostrarModal(true)}>+</button>;
}

export { TareaNueva };
