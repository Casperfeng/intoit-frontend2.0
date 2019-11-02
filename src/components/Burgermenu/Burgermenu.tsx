import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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

const MenubarOne = styled(Menubar)`
  ${props =>
    props.animation &&
    css`
      transform: rotate(-45deg) translate(-9px, 10px);
    `}
`;

const MenubarTwo = styled(Menubar)`
  ${props =>
    props.animation &&
    css`
      opacity: 0;
    `}
`;

const MenubarThree = styled(Menubar)`
  ${props =>
    props.animation &&
    css`
      transform: rotate(45deg) translate(-7px, -8px);
    `}
`;

export default function Burgermenu() {
  const [clicked, setClicked] = useState(false);
  return (
    <BurgermenuWrapper onClick={() => setClicked(!clicked)}>
      <MenubarOne animation={clicked} />
      <MenubarTwo animation={clicked} />
      <MenubarThree animation={clicked} />
    </BurgermenuWrapper>
  );
}
