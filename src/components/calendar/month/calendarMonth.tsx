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
  const [fecha, setFecha] = useState(
    {
      day: moment().date(),
      month: moment().month(),
      year: moment().year()
    })

  function handleMonth(button: keyof MonthHandle) {
    let current = {
      month: fecha.month,
      year: fecha.year
    }

    let updateDate = () => setFecha({ ...fecha, month: current.month, year: current.year });

    if (button === 'NEXT') {
      if (current.month === 11) {
        current.month = 0;
        current.year++;
        updateDate()
      } else {
        current.month++;
        updateDate()
      }
    }

    if (button === 'PREV') {
      if (current.month === 0) {
        current.month = 11;
        current.year--;
        updateDate()
      }
      current.month--;
      updateDate()
    }


    console.log(fecha);

  }

  function goToday() {
    setFecha({
      day: moment().date(),
      month: moment().month(),
      year: moment().year()
    })
  }


  return (
    <Container>
      {/* <button onClick={goToday}>TODAY</button> */}
      <Header>
        <button onClick={() => handleMonth('PREV')}>{'<'}</button>
        <div>
          <h1>{DATE.month[fecha.month]}</h1>
          <h3>{fecha.year}</h3>
        </div>
        <button onClick={() => handleMonth('NEXT')}>{'>'}</button>
      </Header>

      {Object.values(DATE.dayWeek).map((nameDay: any) => <p key={Math.random()}>{nameDay}</p>)}
      {generatorTags(0, weekStart - 1).map(el => <span key={el}></span>)}
      {generatorTags(1, daysInMonth).map(day => {
        return moment().date() === day
          ? <DayComponent key={day} number={day} today={'active'} />
          : <DayComponent key={day} number={day} />
      })}
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
justify-content:space-between;
align-items:center;

  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    h1{
      margin: 0px 20px
    }

    h3{
      margin:0px;
      padding:0px;
    }
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
