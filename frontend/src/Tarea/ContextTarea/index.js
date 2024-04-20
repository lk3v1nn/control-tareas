import React from "react";
import { useAPI } from "./useAPI";
import react from "react";

const contextTareas = React.createContext();

function ProviderTareas({ children }) {
    // Consulta el Local Storage para obtener las tareas
    const {
        item: tarea,
        agregarTareaAPI,
        actualizarTareasAPI,
        eliminarTareaAPI,
        cargando,
        error,
    } = useAPI("tareas_V1", []);

    //Total de tareas
    const tareasTotal = tarea.length;
    //Numero de tareas completadas
    const tareasCompletadas = tarea.filter(
        (tarea) => tarea.ESTADO === true
    ).length;

    //Filtra tareas segun la palabra del buscador (de este array es que se toman las tareas que se renderizan)
    const [valorBuscado, setvalorBuscado] = React.useState("");
    const tareasBuscadas = tarea.filter((tarea) =>
        tarea.TAREA.toUpperCase().includes(valorBuscado.toUpperCase())
    );

    const completarTarea = (ID, ESTADO) => {
        const nuevoEstado = ESTADO === false? true : false;
        actualizarTareasAPI({
            ID: ID,
            TAREA: null,
            ESTADO: nuevoEstado,
            FECHA: null,
            IMPORTANTE: null,
            CATEGORIA: null,
            USUARIO_CREADOR: null,
            ASIGNACION: null,
        });
    };

    const [mostrarModalNuevoForm, setMostrarModalNuevoForm] =
        react.useState(false);
    const [monstarModalEditarForm, setMonstarModalEditarForm] =
        react.useState(false);
    const [tareaAEditar, setTareaAEditar] = react.useState({});

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
                agregarTareaAPI,
                actualizarTareasAPI,
                eliminarTareaAPI,
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
