import { LEVELS } from "./levels.enum" //PASO 2: Importar los niveles

//PASO 3: Crear la clase Tarea e inicializar los atributos
export class Task{
    name = ''
    description = ''
    completed = false
    level = LEVELS.NORMAL

    constructor(name, description, completed, level){
        this.name = name
        this.description = description
        this.completed = completed
        this.level = level
    }
}