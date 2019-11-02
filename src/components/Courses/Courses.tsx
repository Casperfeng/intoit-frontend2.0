import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function Courses() {
  const courses = [
    {
      id: 123,
      name: 'Databaser og datamodellering',
      code: 'tdt4145',
      color: 'purple'
    },
    {
      id: 127,
      name: 'Algoritmer og datastrukturer',
      code: 'tdt4100',
      color: 'purple'
    },
    {
      id: 128,
      name: 'Matematikk 1',
      code: 'tma4100',
      color: 'blue'
    },
    {
      id: 121,
      name: 'Matematikk 2',
      code: 'tma4105',
      color: 'blue'
    },
    {
      id: 131,
      name: 'Generell kjemi',
      code: 'tmt4100',
      color: 'green'
    },
    {
      id: 132,
      name: 'Organisk kjemi',
      code: 'tmt4110',
      color: 'green'
    }
  ];

  function getCourses() {
    const courseCardList = courses.map(course => (
      <CourseCard
        id={course.id}
        name={course.name}
        code={course.code}
        color={course.color}
      />
    ));
    return courseCardList;
  }
  return <CoursesWrapper>{getCourses()}</CoursesWrapper>;
}

export default Courses;
