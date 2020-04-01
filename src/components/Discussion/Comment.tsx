import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { MoreVert, Reply } from 'styled-icons/material';
import Divider from '@material-ui/core/Divider';

interface CommentProps {
  comment: any;
  inQuiz: boolean;
  setReplyTo: Function;
}

export default function Comment({ comment, inQuiz, setReplyTo }: CommentProps) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const onUserClick = () => {
    inQuiz
      ? window.confirm(`Er du sikker på at du vil forlate siden og besøke ${comment.username}s profil? Alle økter vil gå tapt`) &&
        history.push(`/users/${comment.user_id}`)
      : history.push(`/users/${comment.user_id}`);
  };

  const onReplyClick = () => {
    setReplyTo(comment.id);
  };

  const showFacebookPic = () =>
    comment.facebook_id && comment.show_facebook_pic
      ? `https://graph.facebook.com/${comment.facebook_id}/picture`
      : require(`../../assets/badges/${comment.avatar}.png`);

  const createdDate = new Date(comment.created);

  return (
    <CommentWrapper reply={comment.reply_to}>
      <Top>
        <Avatar onClick={onUserClick} alt="avatar" src={showFacebookPic()} />
        <h5 onClick={onUserClick}>{comment.username}</h5>
        <MoreVert size={22} />
      </Top>
      <Created>{createdDate.toLocaleDateString()}</Created>
      <div>{comment.message}</div>
      <StyledDivider full={'false'} />
      <Bottom onClick={onReplyClick}>
        <Reply size={22} />
        <p>SVAR</p>
      </Bottom>
      <StyledDivider full={'true'} />
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-left: ${props => (props.reply_to ? '10%' : 0)};
`;

const Top = styled.div`
  display: flex;
  line-height: 50px;
  h5 {
    cursor: pointer;
    flex-grow: 1;
  }
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  cursor: pointer;
`;

const Created = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 8px;
`;

const StyledDivider = styled(Divider)`
  ${({ full }) =>
    full === 'false' &&
    css`
      width: 20%;
      margin: 15px 0 2px 5px;
    `}
`;

const Bottom = styled.div`
  display: flex;
  margin: 8px 5px;
  cursor: pointer;
  p {
    margin-left: 8%;
  }
`;
