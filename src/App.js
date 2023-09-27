// import logo from "./platzi.webp";

import React from "react";

import { TareaContador } from "./components/TareaContador";
import { TareaBuscador } from "./components/TareaBuscador";
import { TareaItem } from "./components/TareaItem";
import { TareaNueva } from "./components/TareaNueva";
import { TareaLista } from "./components/TareaLista";

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
                <div className="cajonIzquierdo">
                    <TareaContador completadas={3} total={15} />
                    <TareaNueva />
                </div>
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
