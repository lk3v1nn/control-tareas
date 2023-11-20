// import logo from "./platzi.webp";

import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppTareasUI } from "./appTareasUI";

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

    // Consulta el Local Storage para obtener las tareas

    const {item: tarea, actulizaLocalStorageYEstado:guardarTareas, cargando, error} = useLocalStorage("tareas_V1", []);

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

        guardarTareas(nuevoTareas);
    };

    const eliminarTarea = (text) => {
        const nuevoTareas = tarea.filter((tarea) => tarea.tarea !== text);
        guardarTareas(nuevoTareas);
    };

    return (
        <div className="app">
            <AppTareasUI
                cargando={cargando}
                error={error}
                tareasCompletadas={tareasCompletadas}
                tareasTotal={tareasTotal}
                valorBuscado={valorBuscado}
                setvalorBuscado={setvalorBuscado}
                tareasBuscadas={tareasBuscadas}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea}
            />
        </div>
    );
}

export default App;

//SERVITRANG/Servitrang2016
