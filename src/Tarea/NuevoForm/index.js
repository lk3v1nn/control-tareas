import React from "react";
import "./nuevoForm.css";
import { contextTareas } from "../ContextTarea";

function NuevoForm() {
    const { setMostrarModalNuevoForm, agregarTareaAPI } =
        React.useContext(contextTareas);
        
    const manejadorForm = (event) => {
        event.preventDefault();

        const tareaTextarea = event.target.textarea.value
        const tarea = tareaTextarea.replaceAll("'", `"`)

        agregarTareaAPI(tarea, 0, "FECHA", 1, 1, 1, 1);

        setMostrarModalNuevoForm(false);
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
                    <textarea
                        name="textarea"
                        className="textareaNuevoForm"
                        placeholder="Escribe algo aqui..."
                        required
                    />
                    <div>
                        <button
                            type="submit"
                            className="buttonNuevoForm buttonCrearNuevoForm"
                        >
                            Crear
                        </button>
                        <button
                            className="buttonNuevoForm buttonCancelarNuevoForm"
                            onClick={() => {
                                setMostrarModalNuevoForm(false);
                            }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { NuevoForm };
