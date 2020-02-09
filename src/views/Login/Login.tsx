import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import FacebookLogin from './components/FacebookLogin';
import WelcomeText from './components/WelcomeText';

export default function Login() {
  const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 990px) {
      flex-wrap: wrap;
    }
  `;
  const token = useSelector((state: ReduxState) => state.login.token);

  if (token) {
    return <Redirect to={'/'} />;
  }
  
  return (
    <ContentLayout>
      <ContentWrapper>
        <WelcomeText />
        <FacebookLogin />
      </ContentWrapper>
    </ContentLayout>
  );
}
