import React from "react";
import "../style/TareaItem.css";
import { TareaItemIcon } from "./TareaItemIcons";

function TareaItem({ tareas, completar, eliminar }) {
    return (
        <li className={`Item ${tareas.completada && "Item--completado"}`}>
            {/* <span
                className={`icon V ${tareas.completada && "V--activo"}`}
                onClick={() => {
                    completar();
                }}
            >
                V
            </span> */}
            <TareaItemIcon type='Check' color='gray'/>

            <p className={`${tareas.completada && "tarea--completada"} text`}>
                {tareas.tarea}
            </p>
            <TareaItemIcon type={'Delete'} color='#c31818' />

            {/* <span
                className="icon X X--activo"
                onClick={() => {
                    eliminar();
                }}
            >
                X
            </span> */}
        </li>
    );
}

export { TareaItem };
