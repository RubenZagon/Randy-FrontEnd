import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dayjs from 'dayjs';
import styled from "../../../styled";
import DATE from "./controllerCalendar";
import { DayComponent } from "./dayComponent";

type MonthHandle = { PREV: string; NEXT: string }




export const CalendarMonth = () => {
  let actualMonth: number = dayjs().month();
  let daysInMonth = dayjs().daysInMonth();
  const [month, setMonth] = useState(DATE.month[actualMonth])

  function handleMonth(button: keyof MonthHandle) {
    if (button === 'NEXT') {
      console.log(dayjs('2020-01-01').day());
    }
    setMonth(DATE.month[actualMonth])
  }


  return (
    <Container>
      <Header>
        <button onClick={() => handleMonth('PREV')}>{'<'}</button>
        <h1>{month}</h1>
        <button onClick={() => handleMonth('NEXT')}>{'>'}</button>
      </Header>

      {DATE.day.map(el => <p key={el}>{el}</p>)}
      {getWeekDayStartInMonth().map(el => <span key={el}></span>)}
      {printDays(daysInMonth).map(day => <DayComponent key={day} number={day} />)}
    </Container>
  );
};

const Container = styled.div`
background: lightcoral;
width: 80vw;
height:70vh;

display:grid;
grid-template-rows: 2fr 1fr 2fr 2fr 2fr 2fr 2fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

`
const Header = styled.div`
background: red;
grid-column: 1/8;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;

  h1{
    margin: 0px 20px
  }

  button{
    height:50%;
  }
`

function printDays(dayOfMonth: number) {
  let days: number[] = [];

  for (let i = 1; i < dayOfMonth; i++) {
    days.push(i)
  }

  return days
}


function getWeekDayStartInMonth() {
  let counter: string[] = [];
  const weekStart: number = dayjs(dayjs().year() + dayjs().month() + '-01').day();

  for (let i = 0; i < weekStart; i++) {
    counter.push(i.toString() + 'spam');
  }

  return counter
}
