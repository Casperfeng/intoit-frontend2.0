import React from 'react';
import styled from 'styled-components';
import Auth from '../../../components/Auth/Auth';
import GuestAuth from '../../../components/Auth/GuestAuth';

export default function FacebookLogin() {
  const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    height: 400px;
    padding: 30px;
    border: 1px solid #c5c5c5;
    border-radius: 5px;
    margin: 10px;
    background-color: white;
    @media (max-width: 990px) {
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  `;

  const TextTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    flex-wrap: nowrap;
    font-size: 36px;
    font-weight: 400;
    padding: 10px;
    margin: 0px;
    @media (max-width: 556px) {
      font-size: 20px;
    }
  `;

  const LoginButtonContainer = styled.div`
    display: flex;
    place-content: center;
  `;
  return (
    <LoginContainer>
      <TextTitle>Logg inn</TextTitle>
      <LoginButtonContainer>
        {' '}
        <Auth connect={false} />
        <GuestAuth />
      </LoginButtonContainer>
    </LoginContainer>
  );
}
