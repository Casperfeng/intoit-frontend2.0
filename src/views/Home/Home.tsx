import React from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import CourseList from './components/CourseList';
import ProfileHeader from './components/ProfileHeader';

export default function Home() {
  return (
    <ContentLayout>
      <ProfileHeader />
      <CourseList />
    </ContentLayout>
  );
}
