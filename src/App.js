// import logo from "./platzi.webp";

import React from "react";

import { TareaContador } from "./TareaContador";
import { TareaBuscador } from "./TareaBuscador";
import { TareaItem } from "./TareaItem";
import { TareaNueva } from "./TareaNueva";
import { TareaLista } from "./TareaLista";

const tareaDatos = [
    { tarea: "Aprender React", completada: false },
    { tarea: "Lavar carro", completada: false },
    { tarea: "Dormir un rato", completada: false },
    { tarea: "Preparar el almuerzo", completada: true },
];

function App() {
    return (
        <div className="app">
        <div className="appLeft centrar">
            <TareaContador completadas={3} total={15} />
            <TareaNueva/>
        </div>

        <div className="appRight centrar">
            <TareaBuscador />

            <TareaLista>
                {tareaDatos.map((task) => (
                    <TareaItem tarea={task.tarea} completada={task.completada} key={task.tarea} />
                ))}
            </TareaLista>
        </div>
        </div>
    );
}

export default App;
