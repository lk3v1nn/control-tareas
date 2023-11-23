import React from "react";

function useLocalStorage(nombreItemLS, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [cargando, setCargando] = React.useState(true);
    const [error, setError] = React.useState(false);

    //Se guarda en un effect para que cargue al final de todo y el tiempo de respuesta no afecte a la carga de la pagina
    React.useEffect(() => {
        setTimeout(() => {
            try {
                //Consulta los datos guardados en LS
                const itemLS = localStorage.getItem(nombreItemLS);
                if (!itemLS) {
                    localStorage.set(
                        "nombreItemLS",
                        JSON.stringify(initialValue)
                    );
                } else {
                    const itemParse = JSON.parse(itemLS);
                    setItem(itemParse);
                }
                setCargando(false);
            } catch (error) {
                setCargando(false);
                setError(true);
            }
        }, 2000);
    }, []);

    //actualiza los datos
    const actulizaLocalStorageYEstado = (datos) => {
        try {
            localStorage.setItem(nombreItemLS, JSON.stringify(datos));
            setItem(datos);
        } catch (error) {
            setError(true);
        }
    };

    return { item, actulizaLocalStorageYEstado, cargando, error };
}

export { useLocalStorage };



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