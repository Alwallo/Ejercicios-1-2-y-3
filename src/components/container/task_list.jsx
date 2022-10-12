import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task'

//PASO 5: Generar el componente funcional (padre de task)
const TaskListComponent = () => {

    //PASO 6: definir la tarea por defecto, como objeto de la clase Task
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    //PASO 7: Dibujar el componente
    return (
        <div>
            <div>
                YOUR TASKS:
            </div>
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;