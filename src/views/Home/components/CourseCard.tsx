import React from "react";
import styled from "styled-components";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import DEFAULT_ICON from "../../../assets/icons/onlineTestIcon.svg";
import MATH_ICON from "../../../assets/icons/mathIcon.svg";
import PHYSICS_ICON from "../../../assets/icons/physicsIcon.svg";
import IT_ICON from "../../../assets/icons/itIcon.svg";
import ECONOMY_ICON from "../../../assets/icons/economyIcon.svg";
import NETWORK_ICON from "../../../assets/icons/networkIcon.svg";

import {
  DEFAULT_BLUE_COLOR,
  TMA_COLOR,
  TDT_COLOR,
  TIØ_COLOR,
  TFY_COLOR,
  TTM_COLOR
} from "shared/colors";

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
  if (code.toUpperCase().includes("TFY")) {
    color = TFY_COLOR;
    icon = PHYSICS_ICON;
  }
  if (code.toUpperCase().includes("TIØ")) {
    color = TIØ_COLOR;
    icon = ECONOMY_ICON;
  }
  if (code.toUpperCase().includes("TMA")) {
    color = TMA_COLOR;
    icon = MATH_ICON;
  }
  if (code.toUpperCase().includes("TDT")) {
    color = TDT_COLOR;
    icon = IT_ICON;
  }
  if (code.toUpperCase().includes("TTM")) {
    color = TTM_COLOR;
    icon = NETWORK_ICON;
  }

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

  const CourseIcon = styled.img`
    height: 155px;
    width: 155px;
    top: 70px;
    left: 50px;
  `;

  const CourseCard = styled(Card)`
    display: flex;
    flex-direction: column;
    background: ${color};
    border: 0;
    color: white;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
  `;

  return (
    <StyledLink to={`/courses/${id}`}>
      <CourseCard>
        {name}
        <CourseIcon src={icon} alt="Course icon" />
      </CourseCard>
    </StyledLink>
  );
}
