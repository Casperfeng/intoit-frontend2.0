import React from 'react';
import styled from 'styled-components';
import Auth from '../../../components/Auth/Auth';

const ButtonContainer = styled.div`
  margin: 0 auto;
`;
export default function FacebookLogin() {
  return (
    <ButtonContainer>
      <Auth connect={false}></Auth>
    </ButtonContainer>
  );
}
