import { TaskState } from "../../redux/taskList/taskListTypes";
import { connect } from "react-redux";
import { TodoList as TodoListComponent } from "./TodoList";

const mapStateToProps = (state: { taskData: TaskState; }) => {
  return {
    tasks: state.taskData.tasksList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (TodoListComponent);
