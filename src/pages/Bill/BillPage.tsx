import React, { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";
import BillCard from "../../components/billCard/index";
import SpendCalculator from "../../components/spendCalculator/index";
import { BillState } from "../../redux/bill/billTypes";
import ButtonNewBill from "../../components/ButtonNewBill";
import ModalNewBill from "../../components/ModalNewBill";


export const BillPage: FC<BillState> = ({ bills, calculateTotalCost }: any) => {

  const [modalState, setModalState] = useState<boolean>(false);

  function showModal() {
    setModalState(true)
  }
  function hideModal() {
    setModalState(false)
  }

  useEffect(() => {
    calculateTotalCost()
  }, [bills, calculateTotalCost])

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
