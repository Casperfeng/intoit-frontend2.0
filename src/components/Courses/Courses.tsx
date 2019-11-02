import React from 'react';
import styled from 'styled-components';
import CourseCard from './CourseCard';

const CoursesWrapper = styled.div`
  justify-content: center;
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
`;

export function Courses() {
  return (
    <CoursesWrapper>
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
      <CourseCard
        id={123}
        name={'Algoritmer og Datastrukturer'}
        code={'TDT4120'}
      />
    </CoursesWrapper>
  );
}

export default Courses;
