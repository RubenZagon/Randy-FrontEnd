import React, { FC } from "react";
import styled from '@emotion/styled';
import { ModalNewBillInterface } from "./types";


/*  ESTRUCTURA DE INPUTS DEL FORM

    "title": "Alquiler",
    "cost": 700,
    "frecuency": "Mensual",
    "color": "LightGreen",
    "payer": ["ruben", "manz", "Raul"]

*/

export const ModalNewBill: FC<ModalNewBillInterface> = ({ handleClose, show, children }) => {
  const showHideClassName: string = show ? "display-block" : ""

  return (
    <Container className={showHideClassName}>
      <form action="" method="get">
        <Seccion>

          <label htmlFor="title">Nombre de la factura:</label>
          <InputTask type="text" id='title' placeholder="Ejemplo: Alquiler" required />
          <label htmlFor="cost">Coste:</label>
          <InputTask type="number" id='cost' placeholder="Ejemplo: 700" required />


          <fieldset>
            <legend>Frecuencia:</legend>

            <input type="radio" name="frecuency" id="mensual" checked />
            <label htmlFor="mensual">Mensual</label>

            <input type="radio" name="frecuency" id="trimestral" />
            <label htmlFor="trimestral">Trimestral</label>
          </fieldset>

          <fieldset className='color'>
            <legend>Color:</legend>

            <input type="radio" name="color" id="lightsalmon" color='lightsalmon' checked />

            <input type="radio" name="color" id="blue" />

          </fieldset>

          <fieldset className='payer'>
            <legend>Pagadores:</legend>

            <span>
              <input type="checkbox" name="payer" id="mensual" />
              <label htmlFor="mensual">Sonia</label>
            </span>
            <span>
              <input type="checkbox" name="payer" id="trimestral" />
              <label htmlFor="trimestral">Oscar</label>
            </span>
            <span>
              <input type="checkbox" name="payer" id="trimestral" />
              <label htmlFor="trimestral">Yasmina</label>
            </span>
          </fieldset>

          <div>
            <button onClick={handleClose}>Cerrar</button>
            <input type='submit' value='Crear' />
          </div>
        </Seccion>
      </form>
    </Container>
  );
};


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


/* COLOR */
    > fieldset,.color{
      display:flex;
      flex-direction:row;

      input {
        cursor: pointer;
        border-radius: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
        height: 20px;
        margin-right: 15px;
        width: 20px;
        -webkit-appearance: none;

      ::after{
          border-radius: 100%;
          content: '';
          height: 15px;
          width: 15px;
        }

        :checked{
          background-color: black;
        }
      }

      input:nth-of-type(1)::after{
          background-color: blue;
        }
        input:nth-of-type(2)::after{
          background-color: red;
        }
    }


/* PAGADORES */
    > fieldset,.payer{
    input {
      cursor: pointer;
    }
      display:flex;
      flex-direction:column;
      align-items:center;

      > span {
        margin: 2px;
        padding: 5px;
      }
    }
`
const Seccion = styled.section`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  padding:3rem;

  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

  display:flex;
  flex-direction:column;

`

const InputTask = styled.input`
padding: 10px 5px 5px 0px;
margin-right: 5%;
width: 70%;
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
