import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background/Background';
import Courses from '../../components/Courses/Courses';
import Navbar from '../../components/Navbar/Navbar';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
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
