// import logo from "./platzi.webp";

import React from "react";

import { TareaContador } from "./components/TareaContador";
import { TareaBuscador } from "./components/TareaBuscador";
import { TareaItem } from "./components/TareaItem";
import { TareaNueva } from "./components/TareaNueva";
import { TareaLista } from "./components/TareaLista";

function App() {
    //Guarda el array de tareas en Local Storage
    // const tareaDatos = [
    //     { tarea: "Aprender React", completada: false },
    //     { tarea: "Lavar carro", completada: false },
    //     { tarea: "Dormir un rato", completada: false },
    //     { tarea: "Preparar el almuerzo ", completada: true },
    //     {
    //         tarea: "aaaa1aaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaa1aaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaa1aaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaaaaaa2aauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaaaaaaaa3uuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaaaaaaaauuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    //     {
    //         tarea: "aaaaaaaaaaaaaaa4uuaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiiiiiii eeeee lorem222222222222222222222222 dsadas sadsadsa dsad as das dsa d sadsadsadsadas",
    //         completada: true,
    //     },
    // ];
    // const tareasString = JSON.stringify(tareaDatos);
    // localStorage.setItem("tareas_V1", tareasString);

    //Consulta el Local Storage para obtener las tareas
    let tareasLSParser = [];
    const tareasLS = localStorage.getItem("tareas_V1");
    if (tareasLS) {
        tareasLSParser = JSON.parse(tareasLS);
    }
    const [tarea, setTareas] = React.useState(tareasLSParser);

    //Total de tareas
    const tareasTotal = tarea.length;
    //Numero de tareas completadas
    const tareasCompletadas = tarea.filter(
        (tarea) => tarea.completada === true
    ).length;

    //Filtra tareas segun la palabra del buscador (de este array es que se toman las tareas que se renderizan)
    const [valorBuscado, setvalorBuscado] = React.useState("");
    const tareasBuscadas = tarea.filter((tarea) =>
        tarea.tarea.toUpperCase().includes(valorBuscado.toUpperCase())
    );

    const completarTarea = (text) => {
        const nuevoTareas = [...tarea];
        const indexTarea = nuevoTareas.findIndex((tarea) => {
            return tarea.tarea === text;
        });

        nuevoTareas[indexTarea].completada === false
            ? (nuevoTareas[indexTarea].completada = true)
            : (nuevoTareas[indexTarea].completada = false);

        actulizaLocalStorageYEstado(nuevoTareas);
    };

    const eliminarTarea = (text) => {
        const nuevoTareas = tarea.filter((tarea) => tarea.tarea !== text);
        actulizaLocalStorageYEstado(nuevoTareas);
    };

    const actulizaLocalStorageYEstado = (datos) => {
        localStorage.setItem("tareas_V1", JSON.stringify(datos));
        setTareas(datos);
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
                            eliminar={() => {
                                eliminarTarea(task.tarea);
                            }}
                        />
                    ))}
                </TareaLista>
            </div>
        </div>
    );
}

export default App;
