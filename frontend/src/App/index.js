// import logo from "./platzi.webp";

import React from "react";
import { AppTareasUI } from "./appTareasUI";
import { ProviderTareas } from "../Tarea/ContextTarea";

function App() {
    return (
        <div className="app">
            <ProviderTareas>
                <AppTareasUI/>
            </ProviderTareas>
        </div>
    );
}

export default App;

//SERVITRANG/Servitrang2016
