import React from "react";
import "./Item.css";
import { TareaItemIcon } from "../ItemIcons";

function TareaItem({ tareas, completar, eliminar }) {
    return (
        <li className={`Item ${tareas.completada && "Item--completado"}`}>
            <TareaItemIcon
                type="Check"
                color="#a2a2a2"
                completada={tareas.completada}
                onFuncion={completar}
            />

            <p className={`${tareas.completada && "tarea--completada"} text`}>
                {tareas.tarea}
            </p>

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
