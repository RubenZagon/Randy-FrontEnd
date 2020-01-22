import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled from "@emotion/styled";
import { billCardList } from "./billCardsList";
import { BillCard } from "./billcard";

interface BillsCardsProps { }

export const BillsCards: FC<BillsCardsProps> = props => {
  return <>{billCardList && billCardList.map(bill => <BillCard key={bill.title} card={bill} />)}</>;
};
