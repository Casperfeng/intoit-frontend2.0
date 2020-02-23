import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FacebookLoginComponent from 'react-facebook-login/dist/facebook-login-render-props';
import colors from 'shared/colors';
import { connectGuestToFacebook } from 'redux/duck/userDuck';
import { FACEBOOK_APP_ID } from 'shared/constants';

export default function ConnectGuest() {
  const dispatch = useDispatch();
  const device_id = useSelector((state: ReduxState) => state.user.device_id);
  const facebook_id = useSelector((state: ReduxState) => state.user.facebook_id);
  const token = useSelector((state: ReduxState) => state.user.token);

  async function connectToFacebook(response) {
    await dispatch(connectGuestToFacebook(response.accessToken, device_id));
  }

  return (
    <>
      {/* Only show the component if the user is registered as a guest */}
      {token && !facebook_id && (
        <ConnectGuestBanner>
          <FacebookLoginComponent
            appId={FACEBOOK_APP_ID}
            autoLoad={false}
            callback={connectToFacebook}
            render={renderProps => <FacebookButton onClick={renderProps.onClick}>{'Koble brukeren til Facebook'}</FacebookButton>}
          />
        </ConnectGuestBanner>
      )}
    </>
  );
}

const ConnectGuestBanner = styled.div`
  display: flex;
  padding: 5px;
  position: relative;
  background-color: ${colors.default};
  height: 50px;
  top: -64px;
`;

const FacebookButton = styled.button`
  background-color: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
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
