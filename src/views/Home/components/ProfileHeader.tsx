import FakeProfilePicture from 'assets/achievements/mediocre_ocra.png';
import React from 'react';
import styled from 'styled-components/macro';
import colors from 'shared/colors';

export default function ProfileHeader() {
  return (
    <Wrapper>
      <WelcomeMessage>
        Velkommen tilbake, søt delfin. Vi har savnet deg{' '}
        <span role="img" aria-label="flirt">
          😘
        </span>
      </WelcomeMessage>
      <Level>
        <img alt="profile-avater" src={FakeProfilePicture} />
        <div>
          <h1>SØT DELFIN</h1>
          <p>Level 10</p>
          <p>50000xp</p>
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
