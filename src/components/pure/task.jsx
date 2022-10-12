import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
//Nota: rfcp (reactFunctionProps) para generar el componente funcional


//PASO 4: Crear el componente de función más bajo
const TaskComponent = ( { task } ) => { 
    return (
        <div>
            <h2>
                Nombre: {task.name} 
            </h2>
            <h3>
                Description: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            <h5>
                This task is: {task.completed ? 'COMPLETED' : 'PENDING'}
                {/* Si es verdadero de ejecuta lo primero si es falso se ejecuta lo segundo */}
            </h5>
        </div>
    );
};

//PASO 4.1: Especificar que el prop 'task' sea una instancia de Task
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

