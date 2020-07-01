import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import { fetchFriends } from 'redux/duck/friendsDuck';
import FakeProfilePicture from 'assets/achievements/mediocre_ocra.png';

export default function ProfileHeader() {
  //const dispatch = useDispatch;
  const user = useSelector((state: ReduxState) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(fetchFriends(user.fbToken, user.facebook_id));
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Wrapper>
      <WelcomeMessage>
        {`Velkommen tilbake, ${user.username}. Vi har savnet deg!`}
        <span role="img" aria-label="flirt">
          😘
        </span>
      </WelcomeMessage>
      <Level>
        <img alt="profile-avater" src={FakeProfilePicture} />
        <div>
          <h1>{user.username}</h1>
          <p>{`Level ${user.level}`}</p>
          <p>{`${user.experience} xp`}</p>
        </div>
      </Level>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 24px 0 0;
    text-transform: uppercase;
  }

  hr {
    height: 1px;
    background-color: ${colors.grey};
    border: none;
  }

  img {
    width: 117px;
    object-fit: contain;
    margin-right: 20px;
  }

  margin-bottom: 30px;
`;

const WelcomeMessage = styled.p`
  font-weight: 500;
`;

const Level = styled.div`
  display: flex;
  margin: 30px 0;

  div {
    display: flex;
    flex-direction: column;
  }
`;
