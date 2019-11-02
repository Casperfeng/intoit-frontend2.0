import React from 'react';
import styled from 'styled-components';
import Courses from '../../components/Courses/Courses';

const PageContent = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
`;

const CoursesContainer = styled.div``;

export default function LandingPage() {
  return (
    <PageContent>
      <CoursesContainer>
        <Courses />
      </CoursesContainer>
    </PageContent>
  );
}
