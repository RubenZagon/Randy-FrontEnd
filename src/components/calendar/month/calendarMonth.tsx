import React, { useState } from "react";
import styled from "../../../styled";
import DATE from "./controllerCalendar";
import { DayComponent } from "./dayComponent";
import moment from "moment";

type MonthHandle = { PREV: string; NEXT: string }




export const CalendarMonth = () => {
  let actualMonth: number = moment().month();
  let daysInMonth = moment().daysInMonth();
  const weekStart = moment(moment().year() + moment().month() + '-01').day();
  const [month, setMonth] = useState(DATE.month[actualMonth])

  function handleMonth(button: keyof MonthHandle) {
    if (button === 'NEXT') {
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

      {Object.values(DATE.dayWeek).map((nameDay: any) => <p key={Math.random()}>{nameDay}</p>)}
      {generatorTags(0, weekStart - 1).map(el => <span key={el}></span>)}
      {generatorTags(1, daysInMonth).map(day => <DayComponent key={day} number={day} />)}
    </Container>
  );
};

const Container = styled.div`
background: lightcoral;
width: 60vw;
height:80vh;

display:grid;
grid-template-rows: 2fr 1fr 2fr 2fr 2fr 2fr 2fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

p {
    align-self:center;
    justify-self:center;
  }
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

function generatorTags(indexStart: number, length: number) {
  let counter: number[] = [];

  for (let i = indexStart; i < length; i++) {
    counter.push(i);
  }

  return counter
}
