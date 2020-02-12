import React, { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";
import BillCard from "../../components/billCard/index";
import SpendCalculator from "../../components/spendCalculator/index";
import { BillState } from "../../redux/bill/billTypes";
import ButtonNewBill from "../../components/ButtonNewBill";
import ModalNewBill from "../../components/ModalNewBill";
import { SMALLPHONE } from "../../utils/const";


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
      {modalState && <ModalNewBill show={modalState} handleClose={hideModal} />}
      <span className="calculator">
        <SpendCalculator />
      </span>
      <span className="button">
        <ButtonNewBill handleClick={showModal} />
      </span>
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


    </Container>
  )
};

const Container = styled.div`
@media screen and (max-width: ${SMALLPHONE}) {
  height:100vh;
  width:100vw;
  grid-template-rows: 1fr 10% 4fr;
  grid-template-columns:1fr;
  grid-template-areas:
            "calculator"
            "button"
            "billCards";

  .billCards{
    justify-self:center;
  }

  .button {
    justify-self:center;

  }
}

margin-top:10px;
display:grid;
grid-template-columns: 1fr 5% 1fr;
grid-template-rows:50px 1fr;
height:80vh;

grid-template-areas:
            "button    . calculator"
            "billCards . calculator";

  .calculator{
    grid-area: calculator;
  }

  .billCards{
    grid-area: billCards;
    /* justify-self:center; */
  }

  .button {
    grid-area: button;

  }

`
