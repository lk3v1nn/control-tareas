import React from "react";
import "../style/TareaItem.css"

function TareaItem({tareas}) {

  return (
      <li className={`Item ${tareas.completada && "Item--completado"}`}>
          <span className={`icon V ${tareas.completada && "V--activo"}`}>V</span>
          <p className={`${tareas.completada && "tarea--completada"}`}>{tareas.tarea}</p>
          <span className="icon X X--activo">X</span>
      </li>
  );
}

export {TareaItem}