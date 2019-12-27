import React from 'react';
import Auth from '../../components/Auth/Auth';
import ContentLayout from '../../components/ContentLayout/ContentLayout';

export default function Login() {
  return (
    <ContentLayout>
      <Auth connect={false} />
    </ContentLayout>
  );
}
