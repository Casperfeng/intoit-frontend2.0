import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
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
    },
    {
      id: 137,
      name: 'Programvareutvikling',
      code: 'tdt4140',
      color: 'purple'
    },
    {
      id: 138,
      name: 'Diskret matematikk',
      code: 'tma4140',
      color: 'blue'
    },
    {
      id: 139,
      name: 'Objektorientert programmering',
      code: 'tdt4100',
      color: 'purple'
    },
    {
      id: 140,
      name: 'IT Grunnkurs',
      code: 'tdt4110',
      color: 'purple'
    },
    {
      id: 141,
      name: 'Exphil',
      code: 'exph004',
      color: 'red'
    },
    {
      id: 145,
      name: 'Menneske-maskin interaksjon',
      code: 'tdt4180',
      color: 'purple'
    },
    {
      id: 146,
      name: 'Kommunikasjon, tjenester og nett',
      code: 'ttm4100',
      color: 'yellow'
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
