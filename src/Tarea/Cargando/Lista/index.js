import React from "react";
import "./MensajeCargando.css";
import '../../cargandoSkeleton.css'

function Cargando() {
    return (
        <>
        {/* <h3 className="textCargando">Cargando tareas...</h3> */}
            {Array.from({ length: 3 }).map((index) => {
                return (
                    <div className="containerCargando animacionCargandoClaro" key={index}>
                        <div className="add animacionCargandoOscuro"></div>
                        <div className="delete animacionCargandoOscuro"></div>
                    </div>
                );
            })}
        </>
    );
}

export { Cargando };
