import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background/Background';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Courses from './components/Courses/Courses';

const CoursesContainer = styled.div`
  margin: 0 auto;
`;

export default function Home() {
  return (
    <ContentLayout>
      <Background />
      <CoursesContainer>
        <Courses />
      </CoursesContainer>
    </ContentLayout>
  );
}
