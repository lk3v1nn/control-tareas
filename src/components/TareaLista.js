import React from 'react'
import "../style/TareaLista.css"

function TareaLista(props){
  return(
    <ul className='lista'>
      {props.children}
    </ul>
  );
}

export {TareaLista}