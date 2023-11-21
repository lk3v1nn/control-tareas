import React from "react";
import { TareaContador } from "../Tarea/Contador";
import { TareaNueva } from "../Tarea/Nuevo";
import { TareaBuscador } from "../Tarea/Buscador";
import { TareaLista } from "../Tarea/Lista";
import { TareaItem } from "../Tarea/Item";
import { Cargando } from "../Tarea/MensajeCargando";
import { MensajeError } from "../Tarea/MensajeError";

function AppTareasUI({
    cargando,
    error,
    tareasCompletadas,
    tareasTotal,
    valorBuscado,
    setvalorBuscado,
    tareasBuscadas,
    completarTarea,
    eliminarTarea,
}) {
    return (
        <>
            <div className="appLeft centrar">
                <div className="cajonIzquierdo">
                    <TareaContador
                        completadas={tareasCompletadas}
                        total={tareasTotal}
                    />
                    <TareaNueva />
                </div>
            </div>

            <div className="appRight centrar">
                <TareaBuscador
                    valorBuscado={valorBuscado}
                    setvalorBuscado={setvalorBuscado}
                />
                {error && <MensajeError />}
                {!cargando && tareasBuscadas.length === 0 && (
                    <p>no hay tareas</p>
                )}
                <TareaLista >
                    {cargando && <Cargando />}

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
            </div>
        </>
    );
}

export { AppTareasUI };
