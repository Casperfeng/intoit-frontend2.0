import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DEFAULT_ICON from '../../../assets/icons/onlineTestIcon.svg';
import MATH_ICON from '../../../assets/icons/mathIcon.svg';
import PHYSICS_ICON from '../../../assets/icons/physicsIcon.svg';
import IT_ICON from '../../../assets/icons/itIcon.svg';
import ECONOMY_ICON from '../../../assets/icons/economyIcon.svg';
import NETWORK_ICON from '../../../assets/icons/networkIcon.svg';

import {
  DEFAULT_BLUE_COLOR,
  TMA_COLOR,
  TDT_COLOR,
  TIØ_COLOR,
  TFY_COLOR,
  TTM_COLOR
} from '../../../styles';

interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
  modified: Date;
  created: Date;
  schoolId: number;
  school: string;
  favorite: boolean;
  isArchived: boolean;
  numExercises: string;
  numTopics: number;
  progression: number;
  numFavoritesAllTime: number;
  numFavoritesThisSemester: number;
}

export default function CourseCard({
  id,
  code,
  name,
  description,
  isArchived,
  numExercises,
  numFavoritesAllTime,
  numFavoritesThisSemester,
  numTopics,
  school,
  schoolId,
  progression,
  favorite,
  created,
  modified
}: CourseProps) {
  let color = DEFAULT_BLUE_COLOR;
  let icon = DEFAULT_ICON;
  if (code.toUpperCase().includes('TFY')) {
    color = TFY_COLOR;
    icon = PHYSICS_ICON;
  }
  if (code.toUpperCase().includes('TIØ')) {
    color = TIØ_COLOR;
    icon = ECONOMY_ICON;
  }
  if (code.toUpperCase().includes('TMA')) {
    color = TMA_COLOR;
    icon = MATH_ICON;
  }
  if (code.toUpperCase().includes('TDT')) {
    color = TDT_COLOR;
    icon = IT_ICON;
  }
  if (code.toUpperCase().includes('TTM')) {
    color = TTM_COLOR;
    icon = NETWORK_ICON;
  }
  const CourseBox = styled.div`
    position: relative;
    width: 250px;
    height: 301px;
    min-width: 250px;
    border: 1px solid black;
    background-color: white;
    box-shadow: -2px 1px 2px -2px #f2f2f2;
    margin: 10px 10px;
    cursor: pointer;
    :hover {
      width: 260px;
      margin: 0px;
    }
  `;

  const CourseBoxContent = styled.div`
    position: relative;
    color: white;
    background-color: ${color};
    display: flex;
    flex-direction: column;
  `;

  const CourseBoxText = styled.p`
    height: 30px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
  `;

  const CourseBoxInfo = styled.div`
    margin-left: 30px;
    overflow: hidden;
    background-color: ${color};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 235px;
    margin: auto;
  `;

  const CourseBoxSchool = styled.p`
    display: flex;
    font-size: 12px;
    margin: 10px auto 0 10px;
  `;

  const CourseBoxCode = styled.p`
    display: flex;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto 0 10px;
  `;

  const CourseBoxUpdated = styled.p`
    display: flex;
    font-size: 12px;
    font-weight: 500px;
    margin: 0 auto 0 10px;
  `;

  const CourseIcon = styled.img`
    position: absolute;
    height: 155px;
    width: 155px;
    top: 70px;
    left: 50px;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `;

  return (
    <StyledLink to={`/courses/${id}`}>
      <CourseBox>
        <CourseBoxContent>
          <CourseBoxText>{name}</CourseBoxText>
          <CourseIcon src={icon}></CourseIcon>
          <CourseBoxInfo>
            <CourseBoxSchool>{school}</CourseBoxSchool>
            <CourseBoxCode>{code}</CourseBoxCode>
            <CourseBoxUpdated>
              Sist endret for {moment(modified).fromNow()}
            </CourseBoxUpdated>
          </CourseBoxInfo>
        </CourseBoxContent>
      </CourseBox>
    </StyledLink>
  );
}
