import React, { FC } from "react";
import styled from '@emotion/styled';

interface ModalProps {
  handleClose: any, show: boolean, children: any
}

export const Modal: FC<ModalProps> = ({ handleClose, show, children }) => {

  const showHideClassName: string = show ? "display-block" : ""


  return (
    <Container className={showHideClassName}>
      <Seccion>
        {children}
        <button onClick={handleClose}>Cerrar</button>
      </Seccion>
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

`
const Seccion = styled.section`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`
