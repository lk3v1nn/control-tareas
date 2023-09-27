import "./style/TareaBuscador.css";
import lupa from "./icons/lupa.png";
import React from "react";

function TareaBuscador() {
    return (
        <div className="Buscador">
            <input type="text" placeholder="Buscar..." />
            <img src={lupa} />
        </div>
    );
}

export { TareaBuscador };
