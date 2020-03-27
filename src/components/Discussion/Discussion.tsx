import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from 'redux/duck/commentDuck';
import styled from 'styled-components';
import colors from 'shared/colors';
import Comment from './Comment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Send } from 'styled-icons/material';

interface DiscussionProps {
  resourceType: String;
  id: number;
}

export default function Discussion({ resourceType, id }: DiscussionProps) {
  const [reply_to, setReplyTo] = useState(null);
  const dispatch = useDispatch();
  const comments = useSelector((state: ReduxState) => state.comments);

  const onPublishClick = e => {
    e.preventDefault();
    console.log('Clicked on send');
    if (false) {
      dispatch(postComment(resourceType, id, 'Message', false, null, reply_to));
    }
  };

  const renderComments = () => {
    return comments ? comments.map(comment => <Comment comment={comment} inQuiz={resourceType === 'exercise' ? true : false} />) : null;
  };

  return (
    <Wrapper>
      {renderComments()}
      <StyledForm onSubmit={onPublishClick}>
        <StyledTextField label="Skriv en kommentar..." multiline rows="3" variant="outlined" />
        <StyledButton variant="outlined" type="submit" startIcon={<Send size={20} />}>
          Publiser
        </StyledButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const StyledForm = styled.form`
  display: flex;
  flex: column;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 4px;
`;
