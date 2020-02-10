import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import BillCard from "../../components/billCard/index";
import SpendCalculator from "../../components/spendCalculator/index";
import { connect } from "react-redux";
import { BillState } from "../../redux/bill/billTypes";
import ButtonNewBill from "../../components/ButtonNewBill";
import ModalNewBill from "../../components/ModalNewBill";


const BillPage: FC<BillState> = ({ bills }: any) => {

  const [modalState, setModalState] = useState<boolean>(true);

  function showModal() {
    setModalState(true)
  }
  function hideModal() {
    setModalState(false)
  }

  return (
    <Container>
      <ModalNewBill show={modalState} handleClose={hideModal} />
      <ButtonNewBill handleClick={showModal} />
      <span className="billCards">
        {bills === undefined
          ? <h3>Cargando...</h3>
          : bills.map((bill) => (

            <BillCard
              key={bill.id}
              id={bill.id}
              title={bill.title}
              cost={bill.cost}
              frecuency={bill.frecuency}
              color={bill.color}
              payers={bill.payer}
              image={bill.image}
              paymentDivision={bill.paymentDivision}
            />
          ))
        }
      </span>
      <span className="calculator">
        <SpendCalculator />
      </span>
    </Container>
  )
};

const mapStateToProps = (state: { billData: BillState }) => ({
  bills: state.billData.billsList
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(BillPage)


const Container = styled.div`
margin-top:10px;
display:grid;
grid-template-columns: 1fr 5% 1fr;
grid-template-rows:50px 1fr;
height:80vh;

.billCards{
  grid-column:1/2;
}

.calculator{
  grid-column:3/4;
}

`
