import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import StyledLink from 'components/StyledLink/StyledLink';
import { FilterNone } from '@styled-icons/material/FilterNone'
import { ListOl } from '@styled-icons/boxicons-regular/ListOl';
import colors from 'shared/colors';

interface TopicCardProps {
  id: number;
  name: string;
  subjectId: number;
  size: number;
}

export default function TopicCard({ id, name, subjectId, size }: TopicCardProps) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <QuizOptions>
        <StyledLink to={`/quiz/${id}/mc`}>
          <Option>
            <ListOl size={32} />
          Flervalg
        </Option>
        </StyledLink>
        <StyledLink to={`/quiz/${id}/fc`}>
          <Option>
            <FilterNone size={26} />
          Flashcard
        </Option>
        </StyledLink>
      </QuizOptions>
      <QuestionCount variant="body2" component="p">
        {size} spørsmål
      </QuestionCount>
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
  flex: 1;
`

const Option = styled(Button)`
  * {
    color: grey;
  }

  &.MuiButtonBase-root {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center
  }

  .MuiButton-label {
    display: flex;
    flex-direction: column;
    min-height: 80px;
  }

  svg {
    min-height: 38px;
  }

  &:hover {
    * {
       color: black;
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
