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
        }, 4000);
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
