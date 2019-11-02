import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background/Background';
import Courses from '../../components/Courses/Courses';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

const CoursesContainer = styled.div``;

export default function LandingPage() {
  return (
    <PageContent>
      <Background />
      <CoursesContainer>
        <Courses />
      </CoursesContainer>
    </PageContent>
  );
}
