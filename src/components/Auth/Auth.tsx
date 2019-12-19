import React from 'react';
import styled from 'styled-components';
import { FACEBOOK_APP_ID, FACEBOOK_REDIRECT_URL } from '../../constants';

const FacebookButton = styled.a`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  box-sizing: border-box;
  position: relative;
  width: 9em;
  margin: 0.2em;
  padding: 0 15px 0 46px;
  border: none;
  text-align: left;
  line-height: 34px;
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

interface AuthProps {
  connect: boolean;
}

export default function Auth(props: AuthProps) {
  const browserIsSafariOrChrome = /CriOS/.test(navigator.userAgent);
  const connectGuest = props.connect ? 'connect=true' : '';

  if (!browserIsSafariOrChrome) {
    return <p>Siden er optimalisert for Chrome og Safari</p>;
  }
  return (
    <FacebookButton
      href={`https://www.facebook.com/v3.2/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${FACEBOOK_REDIRECT_URL}&state={${connectGuest}}&scope=public_profile,user_friends,email&response_type=token`}
    >
      {props.connect
        ? 'Koble gjestekontoen til Facebook'
        : 'Logg inn med Facebook'}
    </FacebookButton>
  );
}
