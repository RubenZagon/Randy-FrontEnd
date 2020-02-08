import { TaskState, TaskAddAction, TaskGetAction } from "../../redux/taskList/taskListTypes";
import { connect } from "react-redux";
import { TodoList as TodoListComponent } from "./TodoList";
import { addNotify } from "../../redux/notifys/notifysActions";
import { addTask, getTask } from "../../redux/taskList/taskListActions";
import { Task } from "../../services/tasks/models";

const mapStateToProps = (state: { taskData: TaskState; }) => {
  return {
    tasks: state.taskData.tasksList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNotify: () => dispatch(addNotify()),
    addTask: (task: Task): TaskAddAction => dispatch(addTask(task)),
    getTask: (id_task: string): TaskGetAction => dispatch(getTask(id_task))
    // fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (TodoListComponent);
