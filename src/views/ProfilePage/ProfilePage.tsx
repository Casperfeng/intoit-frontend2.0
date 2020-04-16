import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import BlazingBlob from 'assets/achievements/blazing_blob.png';
// import { userInfo } from 'os';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Quizmaster from 'assets/achievements/Quizmaster.png';
// import { Rowing, BorderAll } from 'styled-icons/material';
// import { sizing } from '@material-ui/system';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'redux/duck/userDuck';
import { fetchLevels } from 'redux/duck/resourceDuck';

export default function ProfilePage() {
  const ProBar = styled(LinearProgress)`
    && {
      height: 25%;
    }
  `;

  const dispatch = useDispatch();
  const level = useSelector((state: ReduxState) => state.user.level);
  const xp = useSelector((state: ReduxState) => state.user.experience);
  const userName = useSelector((state: ReduxState) => state.user.username);
  const levels = useSelector((state: ReduxState) => state.resource.levels);

  console.log('levels :', level);
  console.log('xp:', xp);

  useEffect(
    () => {
      dispatch(fetchUser());
      dispatch(fetchLevels());
    },
    // eslint-disable-next-line
    [],
  );

  //return <ProgressBarContainer>{ProBar}</ProgressBarContainer>;
  return (
    <ContentLayout>
      <Wrapper>
        <Header>
          <img src={BlazingBlob} alt="profile" />
          <UserInfo>
            <h2>{userName}</h2>
            <p>nivå {level}</p>
            <ProBar variant={'determinate'} value={67} />
            <p> xp {xp}</p>
          </UserInfo>
        </Header>
        <h2>Achievements</h2>
        <Achievements>
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
          <img alt="temp-achive" src={Quizmaster} />
        </Achievements>
        <Content>
          <TopActivities>
            <h1>Siste aktiviteter</h1>
            <LastActivities>
              <Activities>Sprutende Spermhval stemte opp din kommentar</Activities>
              <Activities>Pålitilig manet stemte ned din kommentar</Activities>
              <Activities>Tørr anemone stemte opp din kommentar</Activities>
            </LastActivities>
          </TopActivities>
          <History>
            <h1>Historikk</h1>
            <HistoryActions>Du har laget 18 spørsmål</HistoryActions>
            <HistoryActions>Du har laget 2 temaer</HistoryActions>
            <HistoryActions>Du har laget 1 emne</HistoryActions>
          </History>
        </Content>
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

const Activities = styled.div`
  border-bottom: 1px solid grey;
  margin: 15px;
  padding: 10px;
`;

const LastActivities = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const HistoryActions = styled.div`
  border-bottom: 1px solid grey;
  margin: 15px;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px;
`;

const Achievements = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
`;

const Header = styled.div`
  display: flex;
  margin: 75px;
`;

const UserInfo = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  flex-direction: column;
`;
