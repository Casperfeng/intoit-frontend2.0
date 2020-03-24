import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StyledLink from 'components/StyledLink/StyledLink';

interface TopicCardProps {
  id: number;
  name: string;
  subjectId: number;
  size: number;
}

export default function TopicCard({ id, name, subjectId, size }: TopicCardProps) {
  return (
    <CardContainer>
      <StyledTitle>{name}</StyledTitle>
      <BottomContainer>
        <CardActions>
          <StyledLink to={`/quiz/${id}/fc`}>
            <StyledButton> Flashcards</StyledButton>
          </StyledLink>
        </CardActions>
        <StyledNumberQuestions variant="body2" component="p">
          Flashcards
        </StyledNumberQuestions>
      </BottomContainer>
      <BottomContainer>
        <CardActions>
          <StyledLink to={`/quiz/${id}/mc`}>
            <StyledButton> ta quiz</StyledButton>
          </StyledLink>
        </CardActions>
        <StyledNumberQuestions variant="body2" component="p">
          {size} spørsmål
        </StyledNumberQuestions>
      </BottomContainer>
    </CardContainer>
  );
}

const CardContainer = styled(Card)`
  padding: 15px;
  width: 200px;
  height: 110px;
  margin: 10px;
  :hover {
    width: 220px;
    height: 120px;
    margin: 0px;
  }
`;

const StyledButton = styled(Button)`
  && {
    text-transform: lowercase;
    text-transform: capitalize;
  }
`;

const StyledTitle = styled(Typography)`
  padding-left: 12px;
  font-size: 32;
  text-align: left;
  && {
    color: black;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledNumberQuestions = styled(Typography)`
  && {
    font-size: 12px;
    color: gray;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
