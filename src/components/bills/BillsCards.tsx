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
  // return <>{billCardList && billCardList.map(bill => <BillCard key={bill.title} card={bill} />)} </>;


  return <>{billData && billData.map(bill => <BillCard key={bill.title} card={bill} />)} </>;
};

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
)(BillsCards)
