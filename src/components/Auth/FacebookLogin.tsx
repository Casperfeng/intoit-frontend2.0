import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import FacebookLoginComponent from 'react-facebook-login/dist/facebook-login-render-props';
import { fbLogin } from 'redux/duck/userDuck';
import { FACEBOOK_APP_ID } from 'shared/constants';

export default function FacebookLoginButton() {
  const dispatch = useDispatch();

  async function responseFacebook(response) {
    await dispatch(fbLogin(response.accessToken));
  }

  return (
    <FacebookLoginComponent
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      callback={responseFacebook}
      render={renderProps => <FacebookButton onClick={renderProps.onClick}>{'Logg inn med Facebook'}</FacebookButton>}
    />
  );
}

const FacebookButton = styled.button`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  box-sizing: border-box;
  position: relative;
  width: fit-content;
  text-align: center;
  text-decoration: none;
  margin: 0.2em;
  padding: 10px;
  border: none;
  line-height: 30px;
  white-space: nowrap;
  border-radius: 0.2em;
  font-size: 16px;
  color: #fff;
  text-shadow: 0 -1px 0 #354c8c;
  cursor: pointer;
  :hover {
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }
  :active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
  :focus {
    outline: none;
  }
`;
