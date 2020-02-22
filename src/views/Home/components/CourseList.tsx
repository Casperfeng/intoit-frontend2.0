import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../../redux/duck/coursesDuck';
import devices from 'shared/media';
import CourseCard from './CourseCard';
import RadioButtons from './RadioButtons';

export default function CourseList() {
  const courses = useSelector((state: ReduxState) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h1>EMNER</h1>
      <RadioButtons />
      <Content>
        {courses.map(course => (
          <CourseCard
            key={course.id}
            id={course.id}
            name={course.name}
            code={course.code}
            modified={course.modified}
            created={course.created}
            school={course.school}
            schoolId={course.school_id}
            numExercises={course.n_exercises}
            numTopics={course.n_topics}
            numFavoritesAllTime={course.n_favorites_all_time}
            numFavoritesThisSemester={course.n_favorites_this_semester}
            favorite={course.favorite}
            isArchived={course.is_archived}
            progression={course.progression}
            description={course.description}
          />
        ))}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Content = styled.div`
  display: grid;
  grid-column-gap: 46px;
  grid-row-gap: 36px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;

  @media ${devices.laptopOnly} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tabletOnly} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.mobileOnly} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 24px;
  }
`;
