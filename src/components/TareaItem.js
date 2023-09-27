import React from "react";
import "./style/TareaItem.css"

function TareaItem(props) {
  return (
      <li className={`Item ${props.completada && "Item--completado"}`}>
          <span className={`icon V ${props.completada && "V--activo"}`}>V</span>
          <p className={`${props.completada && "tarea--completada"}`}>{props.tarea}</p>
          <span className="icon X X--activo">X</span>
      </li>
  );
}

export {TareaItem}