import { NotifyState } from "../../redux/notifys/notifysTypes";
import { connect } from "react-redux";
import { CircleOfNotifys as CircleNotifysComponent } from "./circleOfNotifys";

const mapStateToProps = (state: { notifys: NotifyState }) => {
  return {
    notifys: state.notifys
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
  (CircleNotifysComponent);
