import React from 'react';
import styled from 'styled-components';
import Auth from '../../../components/Auth/Auth';

export default function FacebookLogin() {
  const ButtonContainer = styled.div`
    margin: 0 auto;
  `;
  return (
    <ButtonContainer>
      <Auth connect={false}></Auth>
    </ButtonContainer>
  );
}
