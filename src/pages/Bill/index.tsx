import { connect } from "react-redux";
import { BillState } from "../../redux/bill/billTypes";
import { BillPage as BillPageComponent } from "./BillPage";
import { calculateTotalCost } from "../../redux/bill/billActions";


const mapStateToProps = (state: {
  billData: BillState;
}) => ({
  bills: state.billData.billsList
});

const mapDispatchToProps = dispatch => ({
  calculateTotalCost: () => dispatch(calculateTotalCost())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (BillPageComponent);
