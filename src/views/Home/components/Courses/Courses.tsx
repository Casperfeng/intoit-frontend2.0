import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../../../redux/duck/coursesDuck';
import CourseCard from './CourseCard';

export default function Courses() {
  const CoursesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;
  const courses = useSelector((state: ReduxState) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    // eslint-disable-next-line
  }, []);

  const courseCardList = courses.map(course => (
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
  ));

  return <CoursesWrapper>{courseCardList}</CoursesWrapper>;
}
