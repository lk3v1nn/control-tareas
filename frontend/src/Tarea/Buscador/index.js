import "./Buscador.css";
import React from 'react';
import { ReactComponent as Lupa} from "./search.svg";
import { contextTareas } from "../ContextTarea";

function TareaBuscador() {
  const {valorBuscado, setvalorBuscado} = React.useContext(contextTareas)
  
  return (
    <div className="Buscador">
      <input
        type="text"
        placeholder="Buscar"
        value={valorBuscado}
        onChange={(evento) => {
          setvalorBuscado(evento.target.value);
        }}
      />
      <Lupa height='25px'/>
    </div>
  );
}

export { TareaBuscador };
