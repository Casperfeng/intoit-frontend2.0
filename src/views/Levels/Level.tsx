import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels } from 'redux/duck/resourceDuck';
import Activities from './Activities';

import BlazingBlob from 'assets/achievements/blazing_blob.png';
// import { userInfo } from 'os';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import Quizmaster from 'assets/achievements/Quizmaster.png';
// import { Rowing, BorderAll } from 'styled-icons/material';
// import { sizing } from '@material-ui/system';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import { fetchUser } from 'redux/duck/userDuck';

export default function Level() {
  const dispatch = useDispatch();
  const levels = useSelector((state: ReduxState) => state.resource.levels);
  const level = useSelector((state: ReduxState) => state.user.level);
  const xp = useSelector((state: ReduxState) => state.user.experience);
  const userName = useSelector((state: ReduxState) => state.user.username);

  useEffect(
    () => {
      dispatch(fetchLevels());
      dispatch(fetchUser());
    },
    // eslint-disable-next-line
    [],
  );

  const ProBar = styled(LinearProgress)``;

  const calculateProgressBarValue = (currentLevel: number, currentExp: number) => {
    // ? Andreas
    // Siden første level er lik 0, så max level == 8 (lengden av levels-array hentet gjennom redux), minus 1, som er 7
    const maxLevel = levels.length - 1;

    // Hvis brukeren er allerede på max level, progressbar har full verdi
    if (currentLevel === maxLevel) {
      return 100;
    } else {
      // Vi må da finne hvor mye exp man trenger til next level
      const nextLevel = levels.find((element: any) => element.id === currentLevel + 1);
      // Vi kan da regne ut prosentandel av progressbaren
      return (currentExp / nextLevel.min_experience) * 100;
    }
  };

  if (!levels) {
    return <h1>Loading...</h1>;
  }

  return (
    <ContentLayout>
      <Wrapper>
        <AllInfo>
          <UserLevel>
            {
              <Header>
                <img src={BlazingBlob} alt="profile" />
                <StyledTitle>{userName}</StyledTitle>
              </Header>
            }
            {
              <UserInfo>
                <p>nivå {level}</p>
                <ProBar variant={'determinate'} value={calculateProgressBarValue(level, xp)} />
                <p> xp {xp}</p>
              </UserInfo>
            }
            <AllLevelContainer>
              {levels.map((element: any, i: number) => {
                return (
                  <ExpansionPanel key={i}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <LevelContainer>
                        <img alt="temp-achive" src={Quizmaster} />
                        <StyledLetters>{element.name}</StyledLetters>
                        <StyledLetters>{element.min_experience} xp</StyledLetters>
                      </LevelContainer>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <List>
                        {element.activities.map(
                          (e, i) =>
                            e.description && (
                              <li key={i}>
                                <CheckIcon fontSize="small" /> {e.description}
                              </li>
                            ),
                        )}
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}
            </AllLevelContainer>
          </UserLevel>
          <Activities />
        </AllInfo>
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
  margin-left: 50px;
`;

const StyledText = styled.h3`
  margin-left: 20px;
`;

const LevelContainer = styled.div`
  display: flex;
  flex-direction: row;
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

const LevelDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LevelDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
const AllInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: no-wrap;
  width: 100%;
`;

const UserLevel = styled.div`
  float: left;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style-type: none;
`;
