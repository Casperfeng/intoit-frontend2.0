import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import FacebookLogin from './components/FacebookLogin';
import WelcomeText from './components/WelcomeText';

export default function Login() {
  const token = useSelector((state: ReduxState) => state.fbLogin.token);

  if (token) {
    return <Redirect to={'/'} />;
  }

  return (
    <ContentLayout>
      <WelcomeText />
      <FacebookLogin />
    </ContentLayout>
  );
}
