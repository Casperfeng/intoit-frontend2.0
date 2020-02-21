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
import { AccessTime, Favorite } from 'styled-icons/material';

import colors, { subjectColors } from 'shared/colors';

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
  let color = subjectColors.default;
  let icon = DEFAULT_ICON;

  // Refactor this after deciding on what color and icons
  if (code.toUpperCase().includes('TFY')) {
    color = subjectColors.math;
    icon = PHYSICS_ICON;
  }
  if (code.toUpperCase().includes('TIØ')) {
    color = subjectColors.economy;
    icon = ECONOMY_ICON;
  }
  if (code.toUpperCase().includes('TMA')) {
    color = subjectColors.math;
    icon = MATH_ICON;
  }
  if (code.toUpperCase().includes('TDT')) {
    color = subjectColors.it;
    icon = IT_ICON;
  }
  if (code.toUpperCase().includes('TTM')) {
    color = subjectColors.it;
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
          <StyledAccessTime>
            <AccessTime size={22} />
            {/* Remove hardcode date. Implement new date system with date-fns */}
            <p>3d</p>
          </StyledAccessTime>
          <StyledFavorite color={color}>
            <Favorite size={22} />
            <p>{numFavoritesAllTime}</p>
          </StyledFavorite>
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

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.025) translateY(-2px);
  }
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

const StyledAccessTime = styled.div`
  color: ${colors.grey};
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
    margin-top: 3px;
  }
`;

const StyledFavorite = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 2px;
    margin-top: 2px;
    font-weight: 500;
  }

  ${(props: { color: string }) => `
    color: ${props.color};
  `}
`;
const Status = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default CourseCard;
