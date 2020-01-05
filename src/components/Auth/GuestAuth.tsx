import React from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FACEBOOK_APP_ID } from '../../constants';

export default function Auth() {
  const FacebookButton = styled.button`
    background-color: #ececeb;
    box-sizing: border-box;
    position: relative;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    margin: 0.2em;
    padding: 10px;
    border: none;
    width: 184px;
    line-height: 30px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #293640;
    cursor: pointer;
    :hover {
      background-image: linear-gradient(gray, black);
      color: white;
    }
    :active {
      box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
    }
    :focus {
      outline: none;
    }
  `;

  function responseFacebook(response) {
    console.log('CLICKED');
  }

  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      autoLoad={false}
      callback={responseFacebook}
      fields=''
      render={renderProps => (
        <FacebookButton onClick={renderProps.onClick}>
          Logg inn som gjest
        </FacebookButton>
      )}
    />
  );
}
