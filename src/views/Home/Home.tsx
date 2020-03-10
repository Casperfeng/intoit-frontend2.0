import React from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import CourseList from './components/CourseList';
import ProfileHeader from './components/ProfileHeader';
import ConnectGuest from 'components/Auth/ConnectGuest';
import styled from 'styled-components/macro';

export default function Home() {
  return (
    <ContentLayout>
      <Wrapper>
        <ConnectGuest />
        <ProfileHeader />
        <CourseList />
      </Wrapper>
    </ContentLayout>
  );
}

const Wrapper = styled.div`
  margin-top: 48px;
`;
