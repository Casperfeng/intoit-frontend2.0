import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from 'redux/duck/resourceDuck';
import styled from 'styled-components/macro';

export default function Activities() {
  const dispatch = useDispatch();
  const activities = (state: ReduxState) => state.resource.activities;

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
      <p>{activities.length}</p>
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
  );
}

const LevelUpInfo = styled.div`
  padding: 20px;
  margin-left: 100px;
  margin-top: 100px;
  background-color: rgba(196, 196, 196, 0.5);
  color: black;
  width: 40%;
`;

const Xp = styled.h5`
  margin-top: 15px;
  margin-bottom: 5px;
`;
