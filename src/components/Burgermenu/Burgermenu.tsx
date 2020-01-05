import React from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateDropdown } from '../../redux/duck/dropdownDuck';
import Dropdownmenu from '../Dropdownmenu/Dropdownmenu';

interface BurgerMenuProps {
  clicked: boolean;
}

export default function Burgermenu({ clicked }: BurgerMenuProps) {
  const BurgermenuWrapper = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Menubar = styled.div`
    transition: 0.6s;
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

  const token = useSelector((state: ReduxState) => state.fbLogin.token);
  const dispatch = useDispatch();
  return (
    token && (
      <>
        <BurgermenuWrapper onClick={() => dispatch(updateDropdown())}>
          <MenubarOne animation={clicked} />
          <MenubarTwo animation={clicked} />
          <MenubarThree animation={clicked} />
        </BurgermenuWrapper>
        <Dropdownmenu clicked={clicked} />
      </>
    )
  );
}
