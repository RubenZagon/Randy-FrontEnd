import { connect } from "react-redux";
import { BillState, CALCULATE_TOTAL_COST } from "../../redux/bill/billTypes";
import { SpendCalculator } from "./spendCalculator";

const mapStateToProps = (state: {
  billData: BillState;
}) => {
  return {
    total: state.billData.totalSpend
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  calculateTotalCost() {
    dispatch({
      type: CALCULATE_TOTAL_COST
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendCalculator);
