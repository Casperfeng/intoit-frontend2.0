import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from 'redux/duck/resourceDuck';
import styled from 'styled-components/macro';

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state: ReduxState) => state.resource.activities);

  useEffect(
    () => {
      dispatch(fetchActivities());
      console.log(activities);
    },
    // eslint-disable-next-line
    [],
  );
  return (
    <LevelUpInfo>
      <h2>Hvordan går jeg opp i nivå?</h2>
      <Xp>+5xp</Xp>
      {activities
        .filter(e => e.reinforcement === 5)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+25xp</Xp>
      {activities
        .filter(e => e.reinforcement === 25)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+50px</Xp>
      {activities
        .filter(e => e.reinforcement === 50)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+100xp</Xp>
      {activities
        .filter(e => e.reinforcement === 100)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+200xp</Xp>
      {activities
        .filter(e => e.reinforcement === 200)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+300xp</Xp>
      {activities
        .filter(e => e.reinforcement === 300)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+500xp</Xp>
      {activities
        .filter(e => e.reinforcement === 500)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+500xp</Xp>
      {activities
        .filter(e => e.reinforcement === 500)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
      <Xp>+1000xp</Xp>
      {activities
        .filter(e => e.reinforcement === 1000)
        .map((element: any, i: number) => {
          return <ActivitiesStyle>{element.description}</ActivitiesStyle>;
        })}
    </LevelUpInfo>
  );
}

const LevelUpInfo = styled.div`
  padding: 20px;
  margin-left: 100px;
  margin-top: 250px;
  background-color: rgba(196, 196, 196, 0.5);
  color: black;
  width: 40%;
  height: 60%;
`;

const Xp = styled.h5`
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 20px;
`;

const ActivitiesStyle = styled.div`
  margin-top: 10px;
  margin-left: 3px;
  font-size: 20px;
`;
