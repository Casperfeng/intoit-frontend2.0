import React from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import BlazingBlob from 'assets/achievements/blazing_blob.png';
// import { userInfo } from 'os';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Quizmaster from 'assets/achievements/Quizmaster.png';
// import { Rowing, BorderAll } from 'styled-icons/material';
// import { sizing } from '@material-ui/system';

export default function Level() {
  const ProBar = styled(LinearProgress)`
    && {
      height: 25%;
    }
  `;

  return (
    <ContentLayout>
      <Wrapper>
        <Header>
          <img src={BlazingBlob} alt="profile" />
          <StyledTitle>SØT DELFIN</StyledTitle>
        </Header>
        <UserInfo>
          <p>nivå 4</p>
          <ProBar variant={'determinate'} value={67} />
          <p> xp 400/500</p>
        </UserInfo>
        <AllLevelContainer>
          <LevelContainer>
            <img alt="temp-achive" src={Quizmaster} />
            <StyledLetters>Nivå 0</StyledLetters>
            <StyledLetters>0xp</StyledLetters>
          </LevelContainer>
          <LevelContainer>
            <img alt="temp-achive" src={Quizmaster} />
            <StyledLetters>Nivå 1</StyledLetters>
            <StyledLetters>25xp</StyledLetters>
          </LevelContainer>
          <LevelContainer>
            <img alt="temp-achive" src={Quizmaster} />
            <StyledLetters>Nivå 2</StyledLetters>
            <StyledLetters>250xp</StyledLetters>
          </LevelContainer>
          <LevelContainer>
            <img alt="temp-achive" src={Quizmaster} />
            <StyledLetters>Nivå 3</StyledLetters>
            <StyledLetters>2000xp</StyledLetters>
          </LevelContainer>
          <LevelContainer>
            <img alt="temp-achive" src={Quizmaster} />
            <StyledLetters>Nivå 4</StyledLetters>
            <StyledLetters>15000xp</StyledLetters>
          </LevelContainer>
        </AllLevelContainer>
      </Wrapper>
    </ContentLayout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 150px;
    height: 150px;
  }
`;

const StyledTitle = styled.h1`
  margin-top: 50px;
  margin-left: 40px;
`;

const StyledLetters = styled.div`
  margin-top: 60px;
  margin-left: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px;
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid grey;
`;

const AllLevelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  margin: 75px;
`;

const UserInfo = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  margin-left: 20px;
  flex-direction: column;
`;
