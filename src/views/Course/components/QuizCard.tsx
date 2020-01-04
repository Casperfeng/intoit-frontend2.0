import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faClone } from '@fortawesome/free-solid-svg-icons';
import { DEFAULT_BLUE_COLOR } from '../../../styles';

export default function QuizCard() {
  const CardTitle = styled.p`
    height: 60px;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
  `;

  const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;
    visibility: hidden;
  `;

  const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  `;

  const HorizontalRow = styled.hr`
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid white;
  `;

  const SubText = styled.p`
    text-transform: capitalize;
    font-weight: bold;
  `;

  const CardContainer = styled.div`
    position: relative;
    padding: 5px;
    width: 200px;
    height: 250px;
    border: 1px solid black;
    background-color: ${DEFAULT_BLUE_COLOR};
    box-shadow: -2px 1px 2px -2px #f2f2f2;
    color: white;
    margin: 10px 10px;
    :hover {
      width: 220px;
      margin: 0px;
    }
    &:hover ${IconContainer} {
      visibility: visible;
    }
  `;

  return (
    <CardContainer>
      <CardTitle>Tittel</CardTitle>
      <IconContainer>
        <Icon>
          <FontAwesomeIcon icon={faList} size='2x' />
          <SubText>Flervalg</SubText>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faClone} size='2x' />
          <SubText>Flashcard</SubText>
        </Icon>
      </IconContainer>
      <HorizontalRow />
      <SubText>X SPØRSMÅL</SubText>
    </CardContainer>
  );
}
