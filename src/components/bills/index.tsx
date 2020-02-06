// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BillCard } from "./BillCard";
import { connect } from "react-redux";
import { BillCardInterface } from "./types";




const mapStateToProps = (state: BillCardInterface) => {
  return {
    billData: state
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
