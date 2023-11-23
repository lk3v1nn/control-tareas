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

function AppTareasUI() {
    const { cargando, error, mostrarModal} = React.useContext(contextTareas);
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
                            {mostrarModal && (
                                <Modal>
                                    <NuevoForm/>
                                </Modal>
                            )}
                        </>
                    </Tablero>
                )}
            </div>

            <div className="appRight centrar">
                <TareaBuscador />

                <contextTareas.Consumer>
                    {({ tareasBuscadas, completarTarea, eliminarTarea }) => (
                        <TareaLista>
                            {/* //skeleton loadings */}
                            {cargando && <Cargando />}
                            {error && <MensajeError />}
                            {!cargando && tareasBuscadas.length === 0 && (
                                <p>no hay tareas</p>
                            )}

                            {tareasBuscadas.map((task) => (
                                <TareaItem
                                    key={task.tarea}
                                    tareas={task}
                                    completar={() => {
                                        completarTarea(task.tarea);
                                    }}
                                    eliminar={() => {
                                        eliminarTarea(task.tarea);
                                    }}
                                />
                            ))}
                        </TareaLista>
                    )}
                </contextTareas.Consumer>
            </div>
        </>
    );
}

export { AppTareasUI };
