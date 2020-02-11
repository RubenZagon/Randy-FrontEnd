import * as React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./icon";
import { useState } from "react";
import styled from "../../styled";
import { SMALLPHONE } from "../../utils/const";

interface NavigatorProps {
}

const NavIcon = ({ to, name }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink to={to} isActive={(match, location) => {
      if (!match) {
        setIsActive(false);
        return false;
      }
      setIsActive(true);
      return true;
    }}>
      <Icon active={isActive} name={name} />
    </NavLink>
  );
};


class Navigator extends React.Component {
  render() {
    return (
      <Container className="container">
        <NavIcon to="/dashboard" name="dashboard" />
        <NavIcon to="/calendar" name="calendar" />
        <NavIcon to="/tasklist" name="tasklist" />
        <NavIcon to="/bill" name="bill" />
        <NavIcon to="/settings" name="settings" />
      </Container>
    );
  }
}

export default Navigator;


const Container = styled.div`

@media screen and (max-width: ${SMALLPHONE}) {
    min-width:100vw;
    max-height:4.3em;
    bottom:0;
    flex-direction: row;
    top:unset;
    padding-right: unset;
  }

  background: #484848;
  height: 100vh;
  min-width: 70px;
  width: 100%;
  max-width: 8vw;

  padding-right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;


  .icon {
    max-width: 40px;
    width: 80%;
    min-width: 25px;
    margin: 10%;
  }

`
