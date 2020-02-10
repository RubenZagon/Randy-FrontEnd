import { ModalNewBill as ModalNewBillComponent } from "./ModalNewBill";
import { connect } from "react-redux";
import { addBill } from "../../redux/bill/billActions";
import { BillCardInterface } from "../billCard/types";


const mapStateToProps = (state) => {
  return {
    // ejemplo -> billData: state.billsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBill: (data: BillCardInterface) => dispatch(addBill(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalNewBillComponent)
