import React, { FC } from "react";
import styled from "@emotion/styled";
import { AchievementInterface } from "./achievementList";

export interface achievmentItemProps {
  achievement: AchievementInterface;
  className?: string;
}

export const AchievmentItem: FC<achievmentItemProps> = ({ achievement, className }) => {
  return (
    <>
      <ImgContainer>
        <img className={className} src={achievement.image} alt={achievement.name} title={achievement.description} width="100%" height="100%" />
      </ImgContainer>
    </>
  );
};

const ImgContainer = styled.div`
  min-width: 50px;
  width: 100%;
  height: auto;
  max-width: 4em;
  z-index:2;
`
