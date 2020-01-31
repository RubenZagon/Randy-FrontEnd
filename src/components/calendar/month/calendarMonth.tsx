import React, { useState } from "react";
import styled from "../../../styled";
import DATE from "./controllerCalendar";
import { DayComponent } from "./dayComponent";
import moment from "moment";

type MonthHandle = { PREV: string; NEXT: string }

export const CalendarMonth = () => {

  const [date, setDate] = useState(
    {
      day: moment().date(),
      month: moment().month(),
      year: moment().year()
    })

  let currentDateString: string = [date.year.toString(), (date.month + 1).toString()].join('-')
  const weekStart = moment(currentDateString + '-01').day() - 2;

  function handleMonth(button: keyof MonthHandle) {

    console.log(`${DATE.month[date.month]}   -  ${moment(currentDateString, "YYYY-MM").daysInMonth()}`);
    console.log(weekStart - 2);

    let current = {
      month: date.month,
      year: date.year
    }

    let updateDate = () => setDate({ ...date, month: current.month, year: current.year });
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
      } else {
        current.month--;
        updateDate()
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function goToday() {
    setDate({
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
          <h1>{DATE.month[date.month]}</h1>
          <h3>{date.year}</h3>
        </div>
        <button onClick={() => handleMonth('NEXT')}>{'>'}</button>
      </Header>

      {Object.values(DATE.dayWeek).map((nameDay: any) => <p key={Math.random()}>{nameDay}</p>)}

      {generatorTags(0, weekStart).map(el => <span key={el}></span>)}

      {generatorTags(1, moment(currentDateString, "YYYY-MM").daysInMonth()).map(day => {
        const isCurrentDate =
          moment().date() === day &&
          moment().month() === date.month &&
          moment().year() === date.year;

        return (isCurrentDate)
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

  for (let i = indexStart; i <= length; i++) {
    counter.push(i);
  }

  return counter
}
