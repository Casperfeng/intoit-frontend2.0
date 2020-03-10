import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { anonLogin } from 'redux/duck/userDuck';

export default function Auth() {
  const GuestButton = styled.button`
    background-color: #ececeb;
    box-sizing: border-box;
    position: relative;
    width: fit-content;
    text-align: center;
    text-decoration: none;
    margin: 0.2em;
    padding: 10px;
    border: none;
    width: 184px;
    line-height: 30px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #293640;
    cursor: pointer;
    :hover {
      background-image: linear-gradient(gray, black);
      color: white;
    }
    :active {
      box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
    }
    :focus {
      outline: none;
    }
  `;

  const dispatch = useDispatch();

  async function responseLoginClick() {
    await dispatch(anonLogin());
  }

  return <GuestButton onClick={responseLoginClick}>Logg inn som gjest</GuestButton>;
}
