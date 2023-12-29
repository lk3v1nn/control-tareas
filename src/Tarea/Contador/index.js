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
                    <span className="nums">{tareasCompletadas > 0? tareasCompletadas : 0}</span> tareas completadas de{" "}
                    <span className="nums">{tareasTotal}</span>
                </h3>
            )}
        </>
    );
}

export { TareaContador };
