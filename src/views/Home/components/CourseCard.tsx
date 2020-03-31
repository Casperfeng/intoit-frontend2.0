import React from 'react';
import CourseCardWrapper, { CourseIllustration, CourseName, SchoolCode, StyledAccessTime, StyledFavorite, CourseStatus } from './CourseCardStyles';
import StyledLink from 'components/StyledLink/StyledLink';
import { AccessTime, Favorite } from 'styled-icons/material';
import { courseCardDeterminator } from 'shared/util';

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
  useImage: boolean;
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
  useImage,
}: CourseProps) => {
  // Refactor this after deciding on what color and icons
  const courseCardInfo = courseCardDeterminator(code);
  const color = courseCardInfo.color;
  const icon = courseCardInfo.icon;
  return (
    <StyledLink to={`/courses/${id}`}>
      <CourseCardWrapper color={color} useMinHeight={useImage}>
        {useImage && <CourseIllustration src={icon} alt="Course icon" />}
        <CourseName>{name}</CourseName>
        <SchoolCode>{code}</SchoolCode>
        <CourseStatus>
          <StyledAccessTime>
            <AccessTime size={22} />
            {/* Remove hardcode date. Implement new date system with date-fns */}
            <p>3d</p>
          </StyledAccessTime>
          <StyledFavorite color={color}>
            <Favorite size={22} />
            <p>{numFavoritesAllTime}</p>
          </StyledFavorite>
        </CourseStatus>
      </CourseCardWrapper>
    </StyledLink>
  );
};

export default CourseCard;
