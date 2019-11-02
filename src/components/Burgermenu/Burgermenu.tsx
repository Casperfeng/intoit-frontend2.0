import React from 'react';
import styled from 'styled-components';

const BurgermenuWrapper = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Menubar = styled.div`
  transition: 0.9s;
  margin-top: 3px;
  margin-bottom: 2px;
  background-color: black;
  width: 40px;
  height: 7px;
`;

export default function Burgermenu() {
  return (
    <BurgermenuWrapper>
      <Menubar />
      <Menubar />
      <Menubar />
    </BurgermenuWrapper>
  );
}
