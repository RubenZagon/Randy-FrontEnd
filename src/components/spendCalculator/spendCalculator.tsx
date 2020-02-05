import React, { FC } from "react";
import styled from '@emotion/styled';
import { connect } from "react-redux";
import { BillCardInterface } from "../bills/types";

interface SpendCalculatorProps {
  billData?: BillCardInterface
}

export const SpendCalculator: FC<SpendCalculatorProps> = ({ billData }) => {

  const calcu = [{ ...billData }];

  return (
    <Container>
      <h1>Total de gastos <span role='img' aria-label='dinero volando'> 💸</span></h1>
      {
        calcu && calcu.map(() => {
          console.log(billData);

          return 'hola'
        })
      }
    </Container>
  );
};

const Container = styled.div`
background: lightcoral;

`

const mapStateToProps = (state: any) => {
  return {
    billData: state.bill
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
)(SpendCalculator)
