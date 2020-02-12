import React, { FC } from "react";
import styled from "@emotion/styled";
import { NotifysProps } from "./types";



export const CircleOfNotifys: FC<NotifysProps> = ({ notifys }: any) => {
  return (
    <div>
      {notifys.count > 0 && <CircleNotifys>{notifys.count}</CircleNotifys>}
    </div>
  );
};


const CircleNotifys = styled.div`
  background: red;
  color: white;
  border-radius: 50%;
  border: 5px solid white;
  min-width: 15px;
  min-height: 15px;
  width: 5vw;
  height: 5vw;
  max-width: 25px;
  max-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
