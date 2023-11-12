// import logo from "./platzi.webp";

import React from "react";
// import useState from 'react'

import { TareaContador } from "./components/TareaContador";
import { TareaBuscador } from "./components/TareaBuscador";
import { TareaItem } from "./components/TareaItem";
import { TareaNueva } from "./components/TareaNueva";
import { TareaLista } from "./components/TareaLista";

const tareaDatos = [
    { tarea: "Aprender React", completada: false },
    { tarea: "Lavar carro", completada: false },
    { tarea: "Dormir un rato", completada: false },
    { tarea: "Preparar el almuerzo ", completada: true },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
    {
        tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
        completada: true,
    },
];

function App() {
    const [tarea, setTareas] = React.useState(tareaDatos);
    const tareasCompletadas = tarea.filter(
        (tarea) => tarea.completada === true
    ).length;
    const tareasTotal = tarea.length;

    const [valorBuscado, setvalorBuscado] = React.useState("");
    const tareasBuscadas = tarea.filter((tarea) =>
        tarea.tarea.toUpperCase().includes(valorBuscado.toUpperCase())
    );
    //   tareasBuscadas.map(t => console.log(t.tarea))
    console.log(tareasBuscadas);

    const completarTarea = (text) => {
        const nuevoTareas = [...tarea];
        const indexTarea = nuevoTareas.findIndex((tarea) => {
            return tarea.tarea === text;
        });

        nuevoTareas[indexTarea].completada === false
            ? (nuevoTareas[indexTarea].completada = true)
            : (nuevoTareas[indexTarea].completada = false);
        setTareas(nuevoTareas);
    };

    const eliminarTarea = (text) => {
      const nuevoTareas = tarea.filter((tarea) => tarea.tarea != text)
      setTareas(nuevoTareas)
    };

    return (
        <div className="app">
            <div className="appLeft centrar">
                <div className="cajonIzquierdo">
                    <TareaContador
                        completadas={tareasCompletadas}
                        total={tareasTotal}
                    />
                    <TareaNueva />
                </div>
            </div>

            <div className="appRight centrar">
                <TareaBuscador
                    valorBuscado={valorBuscado}
                    setvalorBuscado={setvalorBuscado}
                />

                <TareaLista>
                    {tareasBuscadas.map((task) => (
                        <TareaItem
                            key={task.tarea}
                            tareas={task}
                            completar={() => {
                                completarTarea(task.tarea);
                            }}
                            eliminar={()=>{
                              eliminarTarea(task.tarea)
                            }}
                        />
                    ))}
                </TareaLista>
            </div>
        </div>
    );
}

export default App;
