import React from 'react';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Courses from './components/Courses';

export default function Home() {
  return (
    <ContentLayout>
      <Courses />
    </ContentLayout>
  );
}
