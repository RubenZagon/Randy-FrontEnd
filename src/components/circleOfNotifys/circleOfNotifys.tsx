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
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
