import React from "react";
import "./Contador.css";
import { contextTareas } from "../ContextTarea";

function TareaContador() {
    const { tareasCompletadas, tareasTotal } = React.useContext(contextTareas);
    return (
        <>
            {tareasCompletadas === tareasTotal ? (
                <h3>No tienes tareas pendientes 🥳</h3>
            ) : (
                <h3>
                    Has completado{" "}
                    <span className="nums">{tareasCompletadas}</span> de{" "}
                    <span className="nums">{tareasTotal}</span> tareas
                </h3>
            )}
        </>
    );
}

export { TareaContador };
