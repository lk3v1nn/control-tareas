import React from "react";
import "../style/TareaItem.css";

function TareaItem({ tareas, completar }) {
    return (
        <li className={`Item ${tareas.completada && "Item--completado"}`}>
            <span
                className={`icon V ${tareas.completada && "V--activo"}`}
                onClick={()=>{completar()}}
            >
                V
            </span>
            <p className={`${tareas.completada && "tarea--completada"} text`}>
                {tareas.tarea}
            </p>
            <span className="icon X X--activo">X</span>
        </li>
    );
}

export { TareaItem };
