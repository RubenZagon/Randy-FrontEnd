import React, { FC, useState } from "react";
import styled from '@emotion/styled';
import { ModalNewBillInterface, InputOptions } from "./types";
import { colorCard, BillCardInterface } from "../billCard/types";


/*  ESTRUCTURA DE INPUTS DEL FORM

    "title": "Alquiler",
    "cost": 700,
    "frecuency": "Mensual",
    "color": "LightGreen",
    "payer": ["ruben"]

*/

const checkboxsColors: colorCard[] = ['lightcoral', 'LemonChiffon', 'LightGreen', 'lightcyan', 'lightgrey'];
const payersGroup: string[] = ["Sonia", "Oscar", "Yasmina"].sort();

export const ModalNewBill: FC<ModalNewBillInterface> = ({ handleClose, show, addBill }) => {
  const showHideClassName: string = show ? "display-block" : ""

  const initialState: BillCardInterface = {
    title: "",
    cost: 0,
    frecuency: "Mensual",
    color: "lightcoral",
    payers: []
  }

  const [payload, setPayload] = useState<BillCardInterface>(initialState)

  function handleSumit(event, input: InputOptions) {
    const valueInput = event.target.value
    switch (input) {
      case "title":
        const titleWithFirsLetterUpperCase = valueInput.charAt(0).toLocaleUpperCase() + valueInput.substr(1);
        setPayload({ ...payload, title: titleWithFirsLetterUpperCase })
        break;
      case "cost":
        setPayload({ ...payload, cost: valueInput })
        break;
      default:
        break;
    }
  }

  return (
    <Container className={showHideClassName}>
      <form action="#"
        onSubmit={() => {
          addBill(payload)
          setPayload(initialState)
          handleClose()
        }}>
        <Seccion>
          <ContainerInput>
            <label htmlFor="title">Título:</label>
            <InputBill
              onBlur={(e) => handleSumit(e, "title")}
              type="text"
              id='title'
              placeholder="Ejemplo: Alquiler"
              required
              autoFocus />
          </ContainerInput>
          <ContainerInput>
            <label htmlFor="cost">Coste:</label>
            <InputBill
              onBlur={(e) => handleSumit(e, "cost")}
              type="number"
              id='cost'
              placeholder="Ejemplo: 700"
              required />
          </ContainerInput>


          <fieldset className='frecuency'>
            <legend> Frecuencia </legend>
            <div>
              <label htmlFor="mensual">
                <input
                  onChange={() => setPayload({ ...payload, frecuency: "Mensual" })}
                  type="radio"
                  name="frecuency"
                  id="mensual"
                />
                Mensual
              </label>
              <label htmlFor="trimestral">
                <input
                  onChange={() => setPayload({ ...payload, frecuency: "Trimestral" })}
                  type="radio"
                  name="frecuency"
                  id="trimestral"
                />
                Trimestral
              </label>
            </div>
          </fieldset>

          <fieldset className='color'>
            <legend> Color </legend>

            <div>
              {checkboxsColors.map((colorEL, index) => (

                <input
                  aria-label={colorEL}
                  key={index}
                  style={{ backgroundColor: colorEL }}
                  onChange={() => setPayload({ ...payload, color: colorEL })}
                  type="radio"
                  name="color"
                  id={colorEL.toLowerCase()}
                />

              ))}
            </div>

          </fieldset>

          <fieldset className='payer'>
            <legend> Pagadores </legend>

            {payersGroup.map((payer, index) => (
              <span key={index}>
                <label htmlFor="payer">
                  <input
                    onChange={(event) => {
                      if (event.target.checked && !payload.payers.includes(payer)) {
                        setPayload({
                          ...payload,
                          payers: [...payload.payers, payer]
                        })
                      } else {
                        setPayload({
                          ...payload,
                          payers: payload.payers.filter((el) => el !== payer)
                        })
                      }
                    }}
                    type="checkbox"
                    name="payer"
                    id={payer.toLowerCase()} />
                  {payer}</label>
              </span>
            ))}
          </fieldset>

          <div className='footer-buttons'>
            <ButtonSubmit type='submit' value='Crear' />
            <ButtonClose type='reset' value='Cerrar' onClick={handleClose} />
          </div>
        </Seccion>
      </form>
    </Container>
  );
};

const buttonsStyle = `
  font-size: 1em;
  height: 40px;
  min-width: 100px;
  width: 50%;
  color: white;
  border-radius: 10px;
  border: 1px solid white;
  outline:0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
const ButtonClose = styled.input`
  background: darkred;
  ${buttonsStyle}
`
const ButtonSubmit = styled.input`
  background: #47ab43;
  font-weight:bold;
  ${buttonsStyle}
`


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  display:none;

  &.display-block{
    display:block;
  }
`
const Seccion = styled.section`
  border-radius:10px;
  position:fixed;
  background: white;
  min-width: 250px;
  width: 40%;
  max-width: 350px;
  height: auto;
  padding:2rem;

  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

  display:flex;
  flex-direction:column;

  > fieldset {
    margin-bottom:10px;
  }

/* FRECUENIA */
  > fieldset,.frecuency{
    >div{
      display:flex;
      justify-content:space-around;
    }

  }
/* COLOR */
    > .color{
      > div{
        display:flex;
        justify-content:space-around;
      }

      input {
        cursor: pointer;
        border-radius: 100%;
        height: 20px;
        width: 20px;
        -webkit-appearance: none;

        :checked{
          border-radius: 0%;
          height: 25px;
          width: 25px;
        }
      }
    }


/* PAGADORES */
    > .payer{

    input {
      cursor: pointer;
    }
      display:flex;
      flex-direction:column;

      > span {
        margin: 2px;
        padding: 5px;
      }
    }

/* BOTONES */
    > .footer-buttons{
      display:flex;
      justify-content:space-around;
    }

`

const InputBill = styled.input`
padding: 10px 5px 5px 0px;
margin-right: 5%;
width: 100%;
font-size: 1em;
border: 0px;
border-bottom: 3px lightgray solid;

&:focus{
  border-bottom: 3px green solid;
}

&:valid{
  border: 1px lightgreen solid;
}


/* &:invalid{
  border: 1px red solid;
} */

`
const ContainerInput = styled.div`
display:flex;
flex-direction:column;
margin-bottom:15px;

  > label{
    margin-bottom:5px;
  }
`
