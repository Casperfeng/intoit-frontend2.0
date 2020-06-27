import React from 'react';
import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import StyledLink from 'components/StyledLink/StyledLink';
import { FilterNone } from '@styled-icons/material/FilterNone';
import { ListOl } from '@styled-icons/boxicons-regular/ListOl';
import colors from 'shared/colors';

interface TopicCardProps {
  id: number;
  name: string;
  size: number;
  hasMCExercises: boolean;
  hasFCExercises: boolean;
}

export default function TopicCard({ id, name, hasMCExercises, size, hasFCExercises }: TopicCardProps) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <QuizOptions>
        {hasMCExercises ? (
          <StyledLink to={`/quiz/${id}/mc`}>
            <Option>
              <ListOl size={32} />
              Flervalg
            </Option>
          </StyledLink>
        ) : (
          <Option disabled>
            <ListOl size={32} color={'grey'} />
            Flervalg
          </Option>
        )}
        {hasFCExercises ? (
          <StyledLink to={`/quiz/${id}/fc`}>
            <Option>
              <FilterNone size={26} />
              Flashcard
            </Option>
          </StyledLink>
        ) : (
          <Option disabled>
            <ListOl size={32} />
            Flashcard
          </Option>
        )}
      </QuizOptions>
      <QuestionCount>{size} spørsmål</QuestionCount>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  padding: 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  min-height: 165px;

  &.MuiCard-root {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    transform: scale(1.025) translateY(-2px);
  }

  h2 {
    font-size: 21px;
    font-weight: 500;
  }
`;

const QuizOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 150px;
  flex: 1;
`;

const Option = styled(Button)`
  height: 100%;

  &.MuiButtonBase-root {
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
  }

  .MuiButton-label {
    display: flex;
    flex-direction: column;
  }

  svg {
    min-height: 38px;
  }

  &.Mui-disabled {
    svg {
      color: lightgrey;
    }
  }

  &:hover {
    * {
      color: ${colors.primary};
    }
  }
`;

const QuestionCount = styled.p`
  font-size: 14px;
  color: ${colors.blackLight};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
