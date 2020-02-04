import { TASK_COMPLETE } from './taskListTypes'
import initialTasksDefault from '../../components/todoList/tasklistDefault'



// const initialState = {
//   numOfIceCreams: 20
// }

const tasksReducer = (state = initialTasksDefault, action: { type: string, id: number }) => {
  switch (action.type) {
    case TASK_COMPLETE: return {
      ...state,
      done: state[action.id].done = true

      // numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}

export default tasksReducer

// EJEMPLO PARA BUSCAR UNA TALEA CON EL ID Y MARCARLA COMO COMPLETADA

// const handleDelete = useCallback(
//   () => (taskToUpdate: Task) => {

//     const newTasks = taskList.map(task => {
//       if (task.uuid === taskToUpdate.uuid) {
//         console.log('Tarea completada - ', task.label);
//         return { ...task, done: !task.done };
//       }
//       return task;
//     })

//     setTaskList(newTasks);
//   }, [taskList]);
