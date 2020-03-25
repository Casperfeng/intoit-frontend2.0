import React from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import CourseList from './components/CourseList';
import ProfileHeader from './components/ProfileHeader';
import ConnectGuest from 'components/Auth/ConnectGuest';

export default function Home() {
  return (
    <ContentLayout>
      <ConnectGuest />
      <ProfileHeader />
      <CourseList />
    </ContentLayout>
  );
}

