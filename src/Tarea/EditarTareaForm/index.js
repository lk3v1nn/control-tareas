import React, { createContext, useContext } from "react";
import "./editarTareaForm.css";
import { contextTareas } from "../ContextTarea";

function EditarTareaForm() {
    const { actualizarTareasAPI, tareaAEditar, setMonstarModalEditarForm } =
        useContext(contextTareas);

    const manejadorSumit = (event) => {
        event.preventDefault(); // EditarTareaForm()
        const nuevoText = event?.target.textarea.value;
        actualizarTareasAPI({
            ID: tareaAEditar.ID,
            TAREA: nuevoText,
            ESTADO: false,
            FECHA: "HOY y AYER",
            IMPORTANTE: true,
            CATEGORIA: 1,
            USUARIO_CREADOR: 2,
            ASIGNACION: 1,
            EQUIPO: 1
        });
        setMonstarModalEditarForm(false);
    };

    return (
        <div className="containerEditarTareaform">
            <div className="card">
                <form
                    className="formEditarForm"
                    onSubmit={(e) => manejadorSumit(e)}
                >
                    <label className="textNuevoForm">Editar tarea</label>
                    <textarea
                        name="textarea"
                        className="textareaNuevoForm"
                        defaultValue={tareaAEditar.TAREA}
                    />
                    <div>
                        <button
                            type="submit"
                            className="buttonEditarForm buttonAceptarEditarForm"
                        >
                            Aceptar
                        </button>
                        <button
                            className="buttonEditarForm buttonCancelarEditarForm"
                            onClick={() => {
                                setMonstarModalEditarForm(false);
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

export { EditarTareaForm };
