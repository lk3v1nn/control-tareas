import React from 'react'
import "./Lista.css"
import './scrollbar.css'

function TareaLista(props){
  return(
    <ul className="lista">
      {props.children}
    </ul>
  );
}

export {TareaLista}