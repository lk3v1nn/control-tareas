import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import react from "react";

const contextTareas = React.createContext();

function ProviderTareas({ children }) {
    // Consulta el Local Storage para obtener las tareas
    const {
        item: tarea,
        actulizaLocalStorageYEstado: guardarTareas,
        cargando,
        error,
    } = useLocalStorage("tareas_V1", []);

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

    const agregarTarea = (text) => {
        const nuevaTarea = { tarea: text, completada: false };
        const tareas = [nuevaTarea, ...tarea];
        guardarTareas(tareas);
    };

    const editarTarea = (text, nuevoText) => {
        const tareaIndex = tarea.findIndex((t) => t.tarea === text);
        let nuevaTarea = [...tarea];
        nuevaTarea[tareaIndex].tarea = nuevoText;
        guardarTareas(nuevaTarea);
    };

    const [mostrarModalNuevoForm, setMostrarModalNuevoForm] =
        react.useState(false);
    const [monstarModalEditarForm, setMonstarModalEditarForm] =
        react.useState(true);
        const [tareaAEditar, setTareaAEditar] =
        react.useState('');

    return (
        <contextTareas.Provider
            value={{
                cargando,
                error,
                tareasCompletadas,
                tareasTotal,
                valorBuscado,
                setvalorBuscado,
                tareasBuscadas,
                completarTarea,
                eliminarTarea,
                agregarTarea,
                editarTarea,
                tareaAEditar,
                setTareaAEditar,
                mostrarModalNuevoForm,
                monstarModalEditarForm,
                setMostrarModalNuevoForm,
                setMonstarModalEditarForm,
            }}
        >
            {children}
        </contextTareas.Provider>
    );
}

export { contextTareas, ProviderTareas };
