// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BillCard } from "./billcard";
import { connect } from "react-redux";
import { BillState } from "../../redux/bill/billTypes";




const mapStateToProps = (state: BillState) => {
  return {
    billData: state.bills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillCard)

