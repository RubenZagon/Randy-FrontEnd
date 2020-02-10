import { BillCard } from "./billcard";
import { connect } from "react-redux";
import { BillState } from "../../redux/bill/billTypes";




const mapStateToProps = (state: BillState) => {
  return {
    billData: state.billsList
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

