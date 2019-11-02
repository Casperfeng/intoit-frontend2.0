import React from 'react';
import styled from 'styled-components';
import BackgroundIllustration from '../../assets/illustrations/blueBackgroundIllustration.svg';

const BackgroundContainer = styled.div`
  margin-top: 120px;
  position: absolute;
  background-image: url(${BackgroundIllustration});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
`;

export default function Background() {
  return <BackgroundContainer />;
}
