import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteComment } from 'redux/duck/commentDuck';
import styled, { css } from 'styled-components';
import { MoreVert, Reply } from 'styled-icons/material';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface CommentProps {
  comment: any;
  inQuiz: boolean;
  setReplyTo: Function;
}

export default function Comment({ comment, inQuiz, setReplyTo }: CommentProps) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: ReduxState) => state.user);
  const createdDate = new Date(comment.created);

  const onUserClick = () => {
    inQuiz
      ? window.confirm(`Er du sikker på at du vil forlate siden og besøke ${comment.username}s profil? Alle økter vil gå tapt`) &&
        history.push(`/users/${comment.user_id}`)
      : history.push(`/users/${comment.user_id}`);
  };

  const handleDeleteComment = async () => {
    await dispatch(deleteComment(comment.resource_id, comment.id));
  };

  const onReplyClick = () => {
    setReplyTo(comment.id);
  };

  const handleMenu = e => {
    setAnchorEl(e.currentTarget);
  };

  const showFacebookPic = () =>
    comment.facebook_id && comment.show_facebook_pic
      ? `https://graph.facebook.com/${comment.facebook_id}/picture`
      : require(`../../assets/badges/${comment.avatar}.png`);

  return (
    <CommentWrapper reply={comment.reply_to}>
      <Top>
        <Avatar onClick={onUserClick} alt="avatar" src={showFacebookPic()} />
        <h5 onClick={onUserClick}>{comment.username}</h5>
        {/* Privileges is not implemented */ comment.user_id === user.id && (
          <div>
            <MoreVert size={22} onClick={handleMenu} />
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={handleDeleteComment}>Slett kommentar</MenuItem>
            </Menu>
          </div>
        )}
      </Top>
      <Created>{createdDate.toLocaleDateString()}</Created>
      <div>{comment.message}</div>
      <StyledDivider length={'short'} />
      <Bottom onClick={onReplyClick}>
        <Reply size={22} />
        <p>SVAR</p>
      </Bottom>
      <StyledDivider />
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div<{ reply?: number }>`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-left: ${props => (props.reply ? '10%' : 0)};
`;

const Top = styled.div`
  display: flex;
  line-height: 50px;
  h5 {
    cursor: pointer;
    margin-left: 8px;
  }
  div {
    margin-left: auto;
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border-color: #000;
  border-width: 10px;
  cursor: pointer;
`;

const Created = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 8px;
`;

const StyledDivider = styled(Divider)<{ length?: string }>`
  ${({ length }) =>
    length === 'short' &&
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
