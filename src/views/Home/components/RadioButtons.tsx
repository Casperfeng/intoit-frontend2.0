import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import Chip from '@material-ui/core/Chip';
import { fetchSchools } from 'redux/duck/schoolDuck';
import { fetchCourses } from 'redux/duck/coursesDuck';

export default function RadioButtons() {
  const schools = useSelector((state: ReduxState) => state.schools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchools());
    // eslint-disable-next-line
  }, []);

  const schoolButtons = schools.map(school => <Chip key={school.id} label={school.name} onClick={() => handleClick(school.id)} />);

  const handleClick = id => {
    dispatch(fetchCourses('', id));
  };
  console.log('schools', schools);
  return (
    <div>
      <Chip label={'Alle'} onClick={() => handleClick(0)} />
      {schoolButtons}
    </div>
  );
}
