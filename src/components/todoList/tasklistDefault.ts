import { Task } from "../../services/tasks/models";

const initialTasksDefault: Task[] = [
  {
    uuid: '1',
    label: 'Tender la ropa',
    done: false
  },
  {
    uuid: '2',
    label: 'Comprar aguacates 🥑',
    done: false
  },
  {
    uuid: '3',
    label: 'Sacar la basura',
    done: false
  },
  {
    uuid: '4',
    label: 'Fregar la loza',
    done: false
  },
  {
    uuid: '5',
    label: 'Barrer comedor 🧹',
    done: false
  }
]

export default initialTasksDefault;
