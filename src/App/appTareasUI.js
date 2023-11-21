import React from "react";
import { TareaContador } from "../Tarea/Contador";
import { TareaNueva } from "../Tarea/Nuevo";
import { TareaBuscador } from "../Tarea/Buscador";
import { TareaLista } from "../Tarea/Lista";
import { TareaItem } from "../Tarea/Item";
import { Cargando } from "../Tarea/CargandoLista";
import { MensajeError } from "../Tarea/MensajeError";
import { CargandoContador } from "../Tarea/CargandoContador";
import { Tablero } from "../Tarea/Tablero";
import { CargandoTablero } from "../Tarea/CargandoTablero";

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
                {cargando ? (
                    <CargandoTablero />
                ) : (
                    <Tablero>
                        <>
                            <TareaContador
                                completadas={tareasCompletadas}
                                total={tareasTotal}
                            />
                            <TareaNueva />
                        </>
                    </Tablero>
                )}
            </div>

            <div className="appRight centrar">
                <TareaBuscador
                    valorBuscado={valorBuscado}
                    setvalorBuscado={setvalorBuscado}
                />

                <TareaLista>
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
            </div>
        </>
    );
}

export { AppTareasUI };
