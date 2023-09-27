import "../style/TareaBuscador.css";
import lupa from "../icons/lupa.png";
import React from 'react';

function TareaBuscador({valorBuscado, setvalorBuscado}) {
  
  return (
    <div className="Buscador">
      <input
        type="text"
        placeholder="Buscar..."
        value={valorBuscado}
        onChange={(evento) => {
          setvalorBuscado(evento.target.value);
        }}
      />
      <img src={lupa} alt="" />
    </div>
  );
}

export { TareaBuscador };
