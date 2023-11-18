import React from "react";
import { TareaContador } from "../Tarea/Contador";
import { TareaNueva } from "../Tarea/Nuevo";
import { TareaBuscador } from "../Tarea/Buscador";
import { TareaLista } from "../Tarea/Lista";
import { TareaItem } from "../Tarea/Item";

function AppTareasUI(
    {tareasCompletadas,
    tareasTotal,
    valorBuscado,
    setvalorBuscado,
    tareasBuscadas,
    completarTarea,
    eliminarTarea}
) {
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

                <TareaLista>
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
