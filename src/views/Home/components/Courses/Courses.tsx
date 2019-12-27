import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Courses() {
  const courses = [
    {
      id: 123,
      name: 'Databaser og datamodellering',
      code: 'tdt4145'
    },
    {
      id: 127,
      name: 'Algoritmer og datastrukturer',
      code: 'tdt4100'
    },
    {
      id: 128,
      name: 'Matematikk 1',
      code: 'tma4100'
    },
    {
      id: 121,
      name: 'Matematikk 2',
      code: 'tma4105'
    },
    {
      id: 131,
      name: 'Generell kjemi',
      code: 'tmt4100'
    },
    {
      id: 132,
      name: 'Organisk kjemi',
      code: 'tmt4110'
    },
    {
      id: 137,
      name: 'Programvareutvikling',
      code: 'tdt4140'
    },
    {
      id: 138,
      name: 'Diskret matematikk',
      code: 'tma4140'
    },
    {
      id: 139,
      name: 'Objektorientert programmering',
      code: 'tdt4100'
    },
    {
      id: 140,
      name: 'IT Grunnkurs',
      code: 'tdt4110'
    },
    {
      id: 141,
      name: 'Exphil',
      code: 'exph004'
    },
    {
      id: 145,
      name: 'Menneske-maskin interaksjon',
      code: 'tdt4180'
    },
    {
      id: 146,
      name: 'Kommunikasjon, tjenester og nett',
      code: 'ttm4100'
    }
  ];

  const courseCardList = courses.map(course => (
    <CourseCard
      key={course.id}
      id={course.id}
      name={course.name}
      code={course.code}
    />
  ));

  return <CoursesWrapper>{courseCardList}</CoursesWrapper>;
}
