import React, { FC } from "react";
import styled from "@emotion/styled";
import CircleOfNotifys from "../circleOfNotifys";
import { SMALLPHONE } from "../../utils/const";


export interface HelloProps {
  name: string;
  srcAvatar: string;
}

const avatarPrint = (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="30" fill="#EAEAEA" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
      <circle cx="30" cy="30" r="30" fill="#EAEAEA" />
    </mask>
    <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M37.3966 31.45C40.1992 29.2533 42 25.8369 42 22C42 15.3726 36.6274 10 30 10C23.3726 10 18 15.3726 18 22C18 26.007 19.964 29.5553 22.9818 31.7348C15.3794 35.3914 10 44.4296 10 55C10 68.8071 19.1782 80 30.5 80C41.8218 80 51 68.8071 51 55C51 44.1437 45.3257 34.9037 37.3966 31.45Z" fill="#484848" />
    </g>
  </svg>
);

export const HelloWithAvatar: FC<HelloProps> = ({ name, srcAvatar }) => {



  return (
    <>
      <HelloContainer>
        <Text>Hola {name}</Text>
        {srcAvatar !== "" && (
          <div>
            <LandscapeImage>
              <Image src={srcAvatar} alt="Avatar" onClick={() => console.log('handleReadNotifys')} />
            </LandscapeImage>
          </div>
        )}
        {srcAvatar === "" && <div>{avatarPrint}</div>}
        <NotifyContainer>
          <CircleOfNotifys />
        </NotifyContainer>
      </HelloContainer>
    </>
  );
};

const HelloContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NotifyContainer = styled.div`
  @media screen and (max-width: ${SMALLPHONE}) {
    transform: translate(-20px, -20px);
  }

  z-index: 5;
  transform: translate(-30px, -40px);
`;

const Text = styled.h3`
  @media screen and (max-width: ${SMALLPHONE}) {
    font-size: 1rem;
  }

  margin-right: 15px;
  font-size: 1.3rem;
`;


const LandscapeImage = styled.div`
  display: inline-block;
  position: relative;
  min-width: 50px;
  min-height: 50px;
  max-width: 80px;
  width:10vw;
  height:10vw;
  max-height: 80px;
  overflow: hidden;
  border-radius: 50%;
`;

const Image = styled.img`
  width: auto;
  height: 80px;
  margin-left: -20px;
`;



