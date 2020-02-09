import { ModalNewBill as ModalNewBillComponent} from "./ModalNewBill";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    // ejemplo -> billData: state.billsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // ejemplo -> fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalNewBillComponent)
