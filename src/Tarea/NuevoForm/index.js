import React from "react";
import "./nuevoForm.css";
import { contextTareas } from "../ContextTarea";

function NuevoForm() {
    const { setMostrarModal, agregarTarea } = React.useContext(contextTareas);
    const manejadorForm = (event) => {
        event.preventDefault();
        agregarTarea(event.target.textarea.value);
        setMostrarModal(false);
    };
    return (
        <div className="container">
            <div className="card">
                <form
                    className="formNuevoForm"
                    onSubmit={(e) => {
                        manejadorForm(e);
                    }}
                >
                    <label className="textNuevoForm">Crea una tarea</label>
                    <textarea name='textarea' className="textareaNuevoForm" placeholder='Escribe algo aqui...' required />
                    <button type="submit" className="buttonNuevoForm buttonCrearNuevoForm">
                        Crear
                    </button>
                    <button
                        className="buttonNuevoForm buttonCancelarNuevoForm"
                        onClick={() => {
                            setMostrarModal(false);
                        }}
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
}

export { NuevoForm };
