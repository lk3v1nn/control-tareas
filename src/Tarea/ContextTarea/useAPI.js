import axios from "axios";
import React from "react";

function useAPI(nombreItemLS, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(false);

    //Se guarda en un effect para que cargue al final de todo y el tiempo de respuesta no afecte a la carga de la pagina
    React.useEffect(() => {
        mostrarTareas();
    }, []);

    //obtiene las tareas de la base de la base de datos
    async function mostrarTareas() {
        try {
            const response = await axios.get("http://localhost:3800/tareas");
            setItem(response.data[0]);
            console.log("API:", response.data[0]);
            setCargando(false);
        } catch (error) {
            setCargando(false);
            setError(true);
        }
    }

    function agregarTareaAPI(
        TAREA,
        ESTADO,
        FECHA,
        IMPORTANTE,
        CATEGORIA,
        USUARIO_CREADOR,
        ASIGNACION
    ) {
        try {
            axios.post("http://localhost:3800/tareas", {
                pTarea: TAREA,
                pEstado: ESTADO,
                pFecha: FECHA,
                pImportante: IMPORTANTE,
                pCategoria: CATEGORIA,
                pUsuarioCreador: USUARIO_CREADOR,
                pAsignacion: ASIGNACION,
            }).then((response)=>{
                console.log(response);
                mostrarTareas()                
            })
        } catch (error) {}
    }

    async function actualizarTareasAPI(
        {ID,
        TAREA,
        ESTADO,
        FECHA,
        IMPORTANTE,
        CATEGORIA,
        USUARIO_CREADOR,
        ASIGNACION}
    ) {
        try {
            await axios
                .put("http://localhost:3800/tareas", {
                    pId: parseInt(ID) || null,
                    pTarea: TAREA? TAREA : null,
                    pEstado: ESTADO == null? null : Number(ESTADO),
                    pFecha: FECHA || null,
                    pImportante: IMPORTANTE == null? null : Number(IMPORTANTE),
                    pCategoria: parseInt(CATEGORIA) || null,
                    pUsuarioCreador: parseInt(USUARIO_CREADOR) || null,
                    pAsignacion: parseInt(ASIGNACION) || null,
                })
                .then(async (response) => {
                    console.log(response);
                    await mostrarTareas();
                });
        } catch (error) {
            setError(true);
        }
    }

    function eliminarTareaAPI(id) {
        setCargando(true);
        try {
            axios
                .delete(`http://localhost:3800/tareas/${id}`)
                .then((response) => {
                    mostrarTareas();
                    console.log(response);
                });
        } catch (error) {
            setError(true);
        }
    }

    return {
        item,
        agregarTareaAPI,
        actualizarTareasAPI,
        eliminarTareaAPI,
        cargando,
        error,
    };
}

export { useAPI };
