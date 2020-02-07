import React, { FC } from "react";
import styled from "@emotion/styled";
import BillCard from "../../components/bills";
import { SpendCalculator } from "../../components/spendCalculator/spendCalculator";
import { connect } from "react-redux";
import { BillState } from "../../redux/bill/billTypes";


const BillPage: FC<BillState> = ({ bills }: any) => {

  // const totalSpend = Object.values(bills).reduce((acc: any, { paymentDivision }: any) => acc + paymentDivision, 0)
  // console.log(totalSpend);

  return (
    <Container>
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
              payer={bill.payer}
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

const mapDispatchToProps = dispatch => ({
  // quitarTitular(jugador) {
  //   dispatch({
  //     type: 'QUITAR_TITULAR',
  //     jugador
  //   })
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(BillPage)


const Container = styled.div`
display:grid;
grid-template-columns: 1fr 5% 1fr;
grid-template-rows:1fr;
height:80vh;

.billCards{
  grid-column:1/2;
}

.calculator{
  grid-column:3/4;
}

`
