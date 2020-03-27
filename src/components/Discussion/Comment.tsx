import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { MoreVert, Reply } from 'styled-icons/material';

interface CommentProps {
  comment: any;
  inQuiz: boolean;
}

export default function Comment({ comment, inQuiz }: CommentProps) {
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
    console.log('Clicked on reply');
  };

  const showFacebookPic = () =>
    comment.facebook_id && comment.show_facebook_pic
      ? `https://graph.facebook.com/${comment.facebook_id}/picture`
      : require(`../../assets/badges/${comment.avatar}.png`);

  return (
    <CommentWrapper reply={comment.reply_to}>
      <div onClick={onUserClick}>
        <img alt="avatar" src={showFacebookPic()} />
        <h2>{comment.username}</h2>
        <MoreVert size={22} />
      </div>
      <Created>{comment.created}</Created>
      <div>{comment.message}</div>
      <div onClick={onReplyClick}>
        <Reply size={22} />
        <p>Reply/Svar</p>
      </div>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  display: flex;
  padding: 5px;
  margin-left: ${props => (props.reply_to ? '10%' : 0)};
`;

const Created = styled.div`
  width: 100%;
`;
