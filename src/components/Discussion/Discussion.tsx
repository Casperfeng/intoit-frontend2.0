import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from 'redux/duck/commentDuck';
import styled from 'styled-components/macro';
import Comment from './Comment';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Add, Close } from 'styled-icons/material';

import { Send } from 'styled-icons/material';

interface DiscussionProps {
  resourceType: String;
  id: number;
}

export default function Discussion({ resourceType, id }: DiscussionProps) {
  const [open, setOpen] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const [newComment, setNewComment] = useState(null);
  const dispatch = useDispatch();
  const comments = useSelector((state: ReduxState) => state.comments);

  const handleOpen = (reply = null) => {
    setReplyTo(reply);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewComment(null);
  };

  const onPublishClick = e => {
    e.preventDefault();
    if (newComment) {
      dispatch(postComment(resourceType, id, newComment, false, null, replyTo));
      setNewComment(null);
      setOpen(false);
    }
  };

  const renderComments = comments.map(comment => (
    <Comment key={comment.id} comment={comment} inQuiz={resourceType === 'exercises' ? true : false} setReplyTo={handleOpen} />
  ));

  return (
    <Wrapper>
      <NewComment onClick={() => handleOpen()}>
        <Add size={22} /> Ny kommentar
      </NewComment>
      <StyledDivider />
      {comments && renderComments}
      <Dialog open={open} onClose={handleClose}>
        <DialogRow>
          <DialogTitle>{replyTo ? 'Svar på kommentar' : 'Skriv ny kommentar'}</DialogTitle>
          <Close size={22} onClick={handleClose} />
        </DialogRow>
        <Divider />
        <DialogContent>
          <StyledForm onSubmit={onPublishClick}>
            <StyledTextField
              onChange={e => setNewComment(e.target.value)}
              label={replyTo ? 'Skriv et svar...' : 'Skriv en kommentar...'}
              autoFocus
              multiline
              rows="3"
              variant="outlined"
            />
            <StyledButton variant="outlined" type="submit" disabled={!newComment} startIcon={<Send size={20} />}>
              Publiser
            </StyledButton>
          </StyledForm>
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const NewComment = styled.div`
  cursor: pointer;
`;

const StyledDivider = styled(Divider)`
  margin: 10px 0;
`;

const DialogRow = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    margin: 5px;
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex: column;
  flex-wrap: wrap;
  align-items: flex-end;
  margin-top: 15px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 4px;
  margin-left: auto;
`;
