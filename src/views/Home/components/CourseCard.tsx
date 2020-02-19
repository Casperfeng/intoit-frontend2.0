import React from 'react';
import styled from 'styled-components/macro';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DEFAULT_ICON from '../../../assets/icons/onlineTestIcon.svg';
import MATH_ICON from '../../../assets/icons/mathIcon.svg';
import PHYSICS_ICON from '../../../assets/icons/physicsIcon.svg';
import IT_ICON from '../../../assets/icons/itIcon.svg';
import ECONOMY_ICON from '../../../assets/icons/economyIcon.svg';
import NETWORK_ICON from '../../../assets/icons/networkIcon.svg';

import { DEFAULT_SUBJECT_COLOR, ECONOMY_COLOR, MATH_COLOR, IT_COLOR } from 'shared/colors';

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

const CourseCard = ({
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
  modified,
}: CourseProps) => {
  let color = DEFAULT_SUBJECT_COLOR;
  let icon = DEFAULT_ICON;

  // Refactor this after deciding on what color and icons
  if (code.toUpperCase().includes('TFY')) {
    color = MATH_COLOR;
    icon = PHYSICS_ICON;
  }
  if (code.toUpperCase().includes('TIØ')) {
    color = ECONOMY_COLOR;
    icon = ECONOMY_ICON;
  }
  if (code.toUpperCase().includes('TMA')) {
    color = MATH_COLOR;
    icon = MATH_ICON;
  }
  if (code.toUpperCase().includes('TDT')) {
    color = IT_COLOR;
    icon = IT_ICON;
  }
  if (code.toUpperCase().includes('TTM')) {
    color = IT_COLOR;
    icon = NETWORK_ICON;
  }

  return (
    <StyledLink to={`/courses/${id}`}>
      <Wrapper color={color}>
        <Illustration src={icon} alt="Course icon" />
        <div>
          <Name>{name}</Name>
          <SchoolCode>{code}</SchoolCode>
        </div>
        <Status>
          <p> ICon 1</p>
          <p>Favorite</p>
        </Status>
      </Wrapper>
    </StyledLink>
  );
};

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

const Illustration = styled.img`
  max-width: 70%;
  max-height: 125px;
  object-fit: contain;
  margin: auto;
`;

const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 270px;
  border: 0;
  justify-content: space-between;
  padding: 16px;
  ${(props: { color: string }) => `
    border: 2px solid ${props.color};
  `}
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
  text-decoration: capitalize;
  margin-bottom: 7px;
`;

const SchoolCode = styled.p`
  font-size: 12px;
  text-decoration: uppercase;
`;

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default CourseCard;
