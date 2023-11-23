import React from "react";
import "./nuevoForm.css";
import { contextTareas } from "../ContextTarea";

function NuevoForm() {
    const {setMostrarModal} = React.useContext(contextTareas)
    const manejadorForm = (event) =>{
        event.preventDefault()
    }
    return (
        <div className="container">
            <div className="card">
                <form className="formNuevoForm" onSubmit={(e) => {manejadorForm(e)}}>
                    <label className="textNuevoForm">Escribe una descripcion</label>
                    <input className='inputNuevoForm' type="textarea"></input>
                    <button className="buttonNuevoForm" type="button">Crear</button>
                    <button className='buttonNuevoForm buttonCancelarNuevoForm' type="button" onClick={() => {setMostrarModal(false)}}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export { NuevoForm };
