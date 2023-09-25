import React from "react";
import "./style/TareaItem.css"

function TareaItem(props) {
  return (
      <li>
          <span className="V">V</span>
          <p>{props.tarea}</p>
          <span className="X">X</span>
      </li>
  );
}

export {TareaItem}