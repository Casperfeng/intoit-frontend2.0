import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../../../redux/duck/coursesDuck';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Courses() {
  const courses = useSelector((state: ReduxState) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    // eslint-disable-next-line
  }, []);

  console.log(JSON.stringify(courses));
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
    />
  ));

  return <CoursesWrapper>{courseCardList}</CoursesWrapper>;
}
