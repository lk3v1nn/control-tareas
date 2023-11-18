import React from "react";

function useLocalStorage(nombreItemLS, initialValue) {
    //Consulta los datos guardados en LS
    let itemParse = initialValue;
    const itemLS = localStorage.getItem(nombreItemLS);
    if (itemLS) {
        itemParse = JSON.parse(itemLS);
    }

    const [item, setItem] = React.useState(itemParse);

    const actulizaLocalStorageYEstado = (datos) => {
        localStorage.setItem(nombreItemLS, JSON.stringify(datos));
        setItem(datos);
    };
    return [item, actulizaLocalStorageYEstado];
}

export {useLocalStorage}