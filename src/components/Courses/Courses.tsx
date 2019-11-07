import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export function Courses() {
  let courses = [
    {
      id: 123,
      name: 'Databaser og datamodellering',
      code: 'tdt4145',
      color: 'teal'
    },
    {
      id: 127,
      name: 'Algoritmer og datastrukturer',
      code: 'tdt4100',
      color: 'teal'
    },
    {
      id: 128,
      name: 'Matematikk 1',
      code: 'tma4100',
      color: 'aqua'
    },
    {
      id: 121,
      name: 'Matematikk 2',
      code: 'tma4105',
      color: 'aqua'
    },
    {
      id: 131,
      name: 'Generell kjemi',
      code: 'tmt4100',
      color: 'SpringGreen'
    },
    {
      id: 132,
      name: 'Organisk kjemi',
      code: 'tmt4110',
      color: 'SpringGreen'
    },
    {
      id: 137,
      name: 'Programvareutvikling',
      code: 'tdt4140',
      color: 'teal'
    },
    {
      id: 138,
      name: 'Diskret matematikk',
      code: 'tma4140',
      color: 'aqua'
    },
    {
      id: 139,
      name: 'Objektorientert programmering',
      code: 'tdt4100',
      color: 'teal'
    },
    {
      id: 140,
      name: 'IT Grunnkurs',
      code: 'tdt4110',
      color: 'teal'
    },
    {
      id: 141,
      name: 'Exphil',
      code: 'exph004',
      color: 'IndianRed'
    },
    {
      id: 145,
      name: 'Menneske-maskin interaksjon',
      code: 'tdt4180',
      color: 'teal'
    },
    {
      id: 146,
      name: 'Kommunikasjon, tjenester og nett',
      code: 'ttm4100',
      color: 'Bisque'
    }
  ];

  function getCourses() {
    console.log(courses);
    courses = sortCourses(courses);
    console.log(courses);
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

  function sortCourses(courses) {
    return courses.sort((a, b) => a.code.localeCompare(b.code));
  }

  return <CoursesWrapper>{getCourses()}</CoursesWrapper>;
}

export default Courses;
