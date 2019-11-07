import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background/Background';
import { FacebookButton } from '../../components/Auth/Auth';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export default function LoginPage() {
  return (
    <PageContent>
      <Background />
      <FacebookButton>Logg inn</FacebookButton>
    </PageContent>
  );
}
