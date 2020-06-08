import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { iconColors } from 'shared/colors';
import { ThumbUpAlt, ThumbDownAlt } from 'styled-icons/material';
import { fetchVotes, postVote } from 'redux/duck/quizDuck';

interface VoteProps {
  index: number;
  exercise: VotedExercise;
}

export default function Vote({ index, exercise }: VoteProps) {
  const dispatch = useDispatch();
  const [clickedButton, setClickedButton] = useState('');
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const { has_voted, has_upvoted, has_downvoted, upvotes, downvotes, id } = exercise;

  useEffect(() => {
    dispatch(fetchVotes(index, id));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (has_voted && !clickedButton) {
      if (has_upvoted) {
        setClickedButton('up');
      } else if (has_downvoted) {
        setClickedButton('down');
      }
    }
    //eslint-disable-next-line
  }, [exercise]);

  const onVote = (vote: string) => {
    if (!(has_voted || hasClicked || (has_upvoted && vote === 'up') || (has_downvoted && vote === 'down'))) {
      setClickedButton(vote);
      setHasClicked(true);
      dispatch(postVote(index, id, vote === 'up'));
    }
  };

  return (
    <Wrapper>
      <IconWrapper>
        <StyledThumbsUpAlt isPressed={has_upvoted} hasVoted={has_voted || hasClicked} onClick={() => onVote('up')} size={22} /> <span>{upvotes}</span>
      </IconWrapper>
      <IconWrapper>
        <StyledThumbsDownAlt isPressed={has_downvoted} hasVoted={has_voted || hasClicked} onClick={() => onVote('down')} size={22} />{' '}
        <span>{downvotes}</span>
      </IconWrapper>
    </Wrapper>
  );
}

interface IconProps {
  hasVoted: boolean;
  isPressed: boolean;
}

const StyledThumbsUpAlt = styled(ThumbUpAlt)`
  ${(props: IconProps) => (props.hasVoted ? `` : `cursor: pointer;`)}
  ${(props: IconProps) => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;

const StyledThumbsDownAlt = styled(ThumbDownAlt)`
  ${(props: IconProps) => (props.hasVoted ? `` : `cursor: pointer;`)}
  ${(props: IconProps) => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  margin: 0 0 0 8px;
  display: flex;
  align-items: center;

  span {
    margin-left: 3px;
  }
`;
