import React, { useState } from 'react';
import CourseCardWrapper, {
  CourseIllustration,
  CourseName,
  SchoolCode,
  StyledAccessTime,
  StyledFavorite,
  CourseStatus,
  StyledCardActionArea,
} from './CourseCardStyles';
import StyledLink from 'components/StyledLink/StyledLink';
import { AccessTime, Favorite, FavoriteBorder } from 'styled-icons/material';
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
  const [favHover, setFavHover] = useState(false);
  const color = courseCardInfo.color;
  const icon = courseCardInfo.icon;

  const handleFavEnter = () => {
    setFavHover(true);
  };

  const handleFavLeave = () => {
    setFavHover(false);
  };

  return (
    <CourseCardWrapper color={color} minheight={useImage ? '240px;' : 'none;'}>
      <StyledLink to={`/courses/${id}`}>
        <StyledCardActionArea>
          {useImage && <CourseIllustration src={icon} alt="Course icon" />}
          <CourseName>{name}</CourseName>
          <SchoolCode>{code}</SchoolCode>
        </StyledCardActionArea>
      </StyledLink>
      <CourseStatus>
        <StyledAccessTime>
          <AccessTime size={22} />
          {/* Remove hardcode date. Implement new date system with date-fns */}
          <p>3d</p>
        </StyledAccessTime>
        <StyledFavorite color={color} onMouseEnter={handleFavEnter} onMouseLeave={handleFavLeave}>
          {favorite || favHover ? <Favorite size={22} /> : <FavoriteBorder size={22} />}
          <p>{numFavoritesAllTime}</p>
        </StyledFavorite>
      </CourseStatus>
    </CourseCardWrapper>
  );
};

export default CourseCard;
