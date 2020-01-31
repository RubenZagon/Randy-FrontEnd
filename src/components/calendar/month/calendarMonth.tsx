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
  const weekStart = moment(currentDateString + '-01').day();

  function handleMonth(button: keyof MonthHandle) {

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
      <button onClick={() => handleMonth('PREV')}>{'<'}</button>
      <Header>
        <div>
          <h1>{date.year}</h1>
          <h1>{DATE.month[date.month].toUpperCase()}</h1>
        </div>
      </Header>

      <BodyDays>
        {Object.values(DATE.dayWeek).map((nameDay: any) => <p key={Math.random()}>{nameDay}</p>)}

        {generatorTags(1, weekStart).map(el => <span key={el}></span>)}

        {generatorTags(1, moment(currentDateString, "YYYY-MM").daysInMonth()).map(day => {
          const isSameDate =
            moment().date() === day &&
            moment().month() === date.month &&
            moment().year() === date.year;

          return (isSameDate)
            ? <DayComponent key={day} number={day} today={'active'} />
            : <DayComponent key={day} number={day} />
        })}
      </BodyDays>
      <button onClick={() => handleMonth('NEXT')}>{'>'}</button>
    </Container>
  );
};

const Container = styled.div`
font-family: "Montserrat",sans-serif;
width: 60vw;
height:80vh;

display:grid;
grid-template-rows: 100px 1fr 1fr;
grid-template-columns: 10% 1fr 10% ;
grid-gap:3px;

p {
    align-self:center;
    justify-self:center;
  }

button{
  align-self:center;
  border-radius:50%;
  height:70px;
  width:70px;
}

  button:nth-of-type(1){
    grid-row:2/3;
    grid-column:1/2;
  }
  button:nth-of-type(2){
    grid-row:2/3;
    grid-column:3/4;
  }
`


const Header = styled.div`
border-radius:5px;

grid-row:1/2;
grid-column:2/3;

  div{
    min-width: 200px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    h1{
      margin: 0px 20px
    }

    h1:nth-of-type(1){
      color:#7e7e7e;
    }

    h1:nth-last-of-type(1){
      color:#47AB43;
    }

    h3{
      margin:0px;
      padding:0px;
    }
  }
`

const BodyDays = styled.div`
display:grid;
grid-template-rows: 1fr 2fr 2fr 2fr 2fr 2fr 2fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-gap:3px;

grid-row:2/4;
grid-column:2/3;
`


function generatorTags(indexStart: number, length: number) {
  let counter: number[] = [];

  for (let i = indexStart; i <= length; i++) {
    counter.push(i);
  }

  return counter
}
