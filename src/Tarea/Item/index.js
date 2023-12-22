import React from "react";
import "./Item.css";
import { TareaItemIcon } from "../ItemIcons";

function TareaItem({
    tarea,
    completar,
    eliminar,
    mostrarModal,
    setTareaAEditar,
}) {
    const Editar = () => {
        mostrarModal(true);
        setTareaAEditar(tarea);
    };
    return (
        <li className={`Item ${tarea.ESTADO && "Item--completado"}`}>
            <TareaItemIcon
                type="Check"
                color="#a2a2a2"
                completada={tarea.ESTADO}
                onFuncion={completar}
            />

            <p
                className={`${tarea.ESTADO && "tarea--completada"} text`}
                onClick={() => {
                    Editar()
                }}
            >
                {tarea.TAREA}
            </p>

            <TareaItemIcon
                type={"Edit"}
                color="white"
                completada={false}
                onFuncion={Editar}
            />

            <TareaItemIcon
                type={"Delete"}
                color="red"
                completada={false}
                onFuncion={eliminar}
            />
        </li>
    );
}

export { TareaItem };
