import React from "react";
import "./MensajeCargando.css";

function Cargando() {
    return (
        <>
        {/* <h3 className="textCargando">Cargando tareas...</h3> */}
            {Array.from({ length: 10 }).map((index) => {
                return (
                    <div className="containerCargando" key={index}>
                        <div className="add"></div>
                        <div className="delete"></div>
                    </div>
                );
            })}
        </>
    );
}

export { Cargando };
