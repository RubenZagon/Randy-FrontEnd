import React, { FC } from "react";
import styled from "@emotion/styled";
import { CalendarMonth } from '../../components/calendar/month/calendarMonth'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
`;

export const Calendar: FC = () => {
  return (
    <Container>
      <CalendarMonth />
    </Container>
  );
};
