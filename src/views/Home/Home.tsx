import React from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import CourseList from './components/CourseList';
import ProfileHeader from './components/ProfileHeader';
import ConnectGuest from 'components/Auth/ConnectGuest';
import FavoriteCourseList from './components/FavoriteCourseList';

export default function Home() {
  return (
    <ContentLayout>
      <ConnectGuest />
      <ProfileHeader />
      <FavoriteCourseList />
      <CourseList />
    </ContentLayout>
  );
}
