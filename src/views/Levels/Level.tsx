import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLevels } from 'redux/duck/resourceDuck';

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

  console.log('levels :', levels);

  useEffect(
    () => {
      console.log('happens');
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
                console.log('element :', element);
                return (
                  <ExpansionPanel key={i}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <LevelContainer>
                        <img alt="temp-achive" src={Quizmaster} />
                        <StyledLetters>{element.name}</StyledLetters>
                        <StyledLetters>{element.min_experience} xp</StyledLetters>
                      </LevelContainer>
                    </ExpansionPanelSummary>
                    {/* ANDREAS: MAP element.activites under */}
                    <ExpansionPanelDetails>MAP element.activities</ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })}

              {/* <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <LevelContainer>
                    <img alt="temp-achive" src={Quizmaster} />
                    <StyledLetters>Nivå 1</StyledLetters>
                    <StyledLetters>25xp</StyledLetters>
                  </LevelContainer>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <LevelDetailsContainer>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText> Legge til forklaring</StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText> Legge til hint</StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText>Lage et emne </StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText>Lage et spørsmål</StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText>Lage et tema</StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText>Stemme på kommentarer</StyledText>
                    </LevelDetails>
                    <LevelDetails>
                      <CheckIcon fontSize="small" />
                      <StyledText>Stemme på spørsmål</StyledText>
                    </LevelDetails>
                  </LevelDetailsContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <LevelContainer>
                    <img alt="temp-achive" src={Quizmaster} />
                    <StyledLetters>Nivå 2</StyledLetters>
                    <StyledLetters>250xp</StyledLetters>
                  </LevelContainer>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails></ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <LevelContainer>
                    <img alt="temp-achive" src={Quizmaster} />
                    <StyledLetters>Nivå 3</StyledLetters>
                    <StyledLetters>2000xp</StyledLetters>
                  </LevelContainer>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails></ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <LevelContainer>
                    <img alt="temp-achive" src={Quizmaster} />
                    <StyledLetters>Nivå 4</StyledLetters>
                    <StyledLetters>15000xp</StyledLetters>
                  </LevelContainer>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails></ExpansionPanelDetails>
              </ExpansionPanel> */}
            </AllLevelContainer>
          </UserLevel>
          <LevelUpInfo>
            <h3>Hvordan går jeg opp i nivå?</h3>
            <Xp>+5xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <div>Noen stemmer opp din kommentarer</div>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+25xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+50px</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+100xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+125xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+200xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+300px</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+500xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
            <Xp>+1000xp</Xp>
            <div>Noen stemmer opp din kommentarer</div>
          </LevelUpInfo>
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
const LevelUpInfo = styled.div`
  padding: 20px;
  margin-left: 100px;
  margin-top: 100px;
  background-color: rgba(196, 196, 196, 0.5);
  color: black;
  width: 40%;
`;

const UserLevel = styled.div`
  float: left;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Xp = styled.h5`
  margin-top: 15px;
  margin-bottom: 5px;
`;
