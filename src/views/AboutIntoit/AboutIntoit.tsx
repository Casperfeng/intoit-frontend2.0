import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
`;

export default function AboutIntoit() {
  return (
    <PageContent>
      <h3>Den beste måten å teste seg i pensum</h3>
    </PageContent>
  );
}
