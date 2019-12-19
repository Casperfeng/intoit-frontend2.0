import React from 'react';
import styled from 'styled-components';
import Background from '../../components/Background/Background';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export default function Login() {
  return (
    <PageContent>
      <Background />
    </PageContent>
  );
}
