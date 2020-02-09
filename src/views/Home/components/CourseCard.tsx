import React from "react";
import styled from "styled-components";
import { Card, CardMedia, CardActionArea, CardContent, Typography, CardActions, Icon, Grid, Badge, ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
    height: 100px;
    /* width: 168px; */
    width: 100%;
  `;

  const IconWithText = styled.div`
    display: flex;
  `

  const CourseActions = styled(CardActions)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 16px;
  `

  const CourseCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: white;
    border: 0;
    color: black;
    margin: 10px;
    padding: 16px;
    width: 200px;
    border: 2px solid ${color};
    transition: 50ms linear;
    &:hover {
      box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
    }
  `;

  return (
    <StyledLink to={`/courses/${id}`}>
        <CourseCard>
          <Grid container spacing={2} >
            <Grid item xs={12}>
              <CourseIcon src={icon} alt="Course icon" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="h6" noWrap={true}>
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
                {`${code} • ${school}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <IconWithText>
                <FontAwesomeIcon icon={faHeart} size='lg' color={color}/>
                <Typography variant="body2" component="p" noWrap={true}>
                  {numFavoritesAllTime}
                </Typography>
              </IconWithText>
            </Grid>
          </Grid>
        </CourseCard>
    </StyledLink>
  );
}
