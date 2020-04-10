import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { iconColors } from 'shared/colors';
import { ThumbUpAlt, ThumbDownAlt } from 'styled-icons/material';
import { fetchVotes, postVote } from 'redux/duck/quizDuck';

interface VoteProps {
  index: number;
  exercise: any; // temporary
}

export default function Vote({ index, exercise }: VoteProps) {
  const dispatch = useDispatch();
  const [clickedButton, setClickedButton] = useState('');
  const [hasClicked, setHasClicked] = useState(false);
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
    if (!(has_voted || (has_upvoted && vote === 'up') || (has_downvoted && vote === 'down'))) {
      setClickedButton(vote);
      setHasClicked(true);
      dispatch(postVote(index, id, vote === 'up'));
    }
  };

  return (
    <Wrapper>
      <IconWrapper>
        <StyledThumbsUpAlt isPressed={has_upvoted} hasVoted={has_voted || hasClicked} onClick={() => onVote('up')} size={22} /> {upvotes}
      </IconWrapper>
      <IconWrapper>
        <StyledThumbsDownAlt isPressed={has_downvoted} hasVoted={has_voted || hasClicked} onClick={() => onVote('down')} size={22} /> {downvotes}
      </IconWrapper>
    </Wrapper>
  );
}

const StyledThumbsUpAlt = styled(ThumbUpAlt)`
  ${props => (props.hasVoted ? `` : `cursor: pointer;`)}
  ${props => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;

const StyledThumbsDownAlt = styled(ThumbDownAlt)`
  ${props => (props.hasVoted ? `` : `cursor: pointer;`)}
  ${props => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;

const Wrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  margin: 0px 3px;
`;
