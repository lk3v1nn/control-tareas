import React from "react";
import "../style/TareaContador.css"

function TareaContador({completadas, total}){
  return(
      <h3>
          Has completado <span className="nums">{completadas}</span> de <span className="nums">{total}</span> tareas
      </h3>
  );
}

export {TareaContador};