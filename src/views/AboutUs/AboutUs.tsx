import React from 'react';
import styled from 'styled-components';
import TeamMembers from './components/TeamMembers/TeamMembers';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export default function AboutUs() {
  return (
    <PageContent>
      <TeamMembers />
    </PageContent>
  );
}
