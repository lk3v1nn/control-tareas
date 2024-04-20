import React from "react";
import { TareaContador } from "../Tarea/Contador";
import { TareaNueva } from "../Tarea/NuevoBoton";
import { TareaBuscador } from "../Tarea/Buscador";
import { TareaLista } from "../Tarea/Lista";
import { TareaItem } from "../Tarea/Item";
import { Cargando } from "../Tarea/Cargando/Lista";
import { MensajeError } from "../Tarea/MensajeError";
import { Tablero } from "../Tarea/Tablero";
import { CargandoTablero } from "../Tarea/Cargando/Tablero";
import { Modal } from "../Tarea/Modal";
import { contextTareas } from "../Tarea/ContextTarea";
import { NuevoForm } from "../Tarea/NuevoForm";
import { EditarTareaForm } from "../Tarea/EditarTareaForm";

function AppTareasUI() {
    const { cargando, error, mostrarModalNuevoForm, monstarModalEditarForm} = React.useContext(contextTareas);
    return (
        <>
            <div className="appLeft centrar">
                {cargando ? (
                    <CargandoTablero />
                ) : (
                    <Tablero>
                        <>
                            <TareaContador />
                            <TareaNueva />
                            <Modal>
                                {mostrarModalNuevoForm && <NuevoForm />}
                                {monstarModalEditarForm && <EditarTareaForm/>}
                            </Modal>
                        </>
                    </Tablero>
                )}
            </div>

            <div className="appRight centrar">
                <TareaBuscador />

                <contextTareas.Consumer>
                    {({
                        tareasBuscadas,
                        completarTarea,
                        eliminarTarea,
                        eliminarTareaAPI,
                        setMonstarModalEditarForm,
                        setTareaAEditar,
                    }) => (
                        <TareaLista>
                            {/* //skeleton loadings */}
                            {cargando? <Cargando /> :
                                tareasBuscadas.map((task) => (
                                    <TareaItem
                                        key={task.ID}
                                        tarea={task}
                                        completar={() => {
                                            completarTarea(task.ID, task.ESTADO);
                                        }}
                                        eliminar={() => {
                                            eliminarTareaAPI(task.ID);
                                        }}
                                        mostrarModal={setMonstarModalEditarForm}
                                        setTareaAEditar={setTareaAEditar}
                                    />
                                ))
                            }
                            {error && <MensajeError />}
                            {!cargando && tareasBuscadas.length === 0 && (
                                <p>no hay tareas</p>
                            )}
                        </TareaLista>
                    )}
                </contextTareas.Consumer>
            </div>
        </>
    );
}

export { AppTareasUI };
