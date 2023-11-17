import "./Buscador.css";
import React from 'react';
import { ReactComponent as Lupa} from "./search.svg";

function TareaBuscador({valorBuscado, setvalorBuscado}) {
  
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
