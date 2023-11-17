import React from "react";
import "./Contador.css";

function TareaContador({ completadas, total }) {
    return (
        <>
            {completadas === total ? (
                <h3>No tienes tareas pendientes 🥳</h3>
            ) : (
                <h3>
                    Has completado <span className="nums">{completadas}</span>{" "}
                    de <span className="nums">{total}</span> tareas
                </h3>
            )}
        </>
    );
}

export { TareaContador };
