import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "@emotion/styled";
import { billCardList, BillCardInterface } from "./billCardsList";
import { BillCard } from "./billcard";
import { connect } from "react-redux";

interface BillsCardsProps {
  billData?: BillCardInterface
}

export const BillsCards: FC<BillsCardsProps> = ({ billData }) => {
  console.log(billData);

  return <>{billCardList && billCardList.map(bill => <BillCard key={bill.title} card={bill} />)} </>;
};

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
)(BillsCards)
