import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components/macro';
import devices from 'shared/media';
import Chip from '@material-ui/core/Chip';
import { buttonColors } from 'shared/colors';
import { fetchSchools } from 'redux/duck/schoolDuck';
import { fetchCourses } from 'redux/duck/coursesDuck';

export default function RadioButtons() {
  const [selected, setSelected] = useState(0);
  const schools = useSelector((state: ReduxState) => state.schools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchools());
    // eslint-disable-next-line
  }, []);

  const handleClick = id => {
    setSelected(id);
    dispatch(fetchCourses('', id));
  };

  const schoolButtons = schools.map(school => (
    <RadioButton key={school.id} label={school.name} onClick={() => handleClick(school.id)} selected={selected === school.id ? true : false} />
  ));

  return (
    <div>
      <RadioButton label={'Alle'} onClick={() => handleClick(0)} selected={selected === 0 ? true : false} />
      {schoolButtons}
    </div>
  );
}
const RadioButton = styled(Chip)<{selected:boolean}>`
  margin: 2px;
  margin-bottom: 20px;
  color: white;
  background: ${buttonColors.default};
  &:focus,
  &:hover,
  &:active {
    background: ${buttonColors.clicked};
  }
  ${props =>
    props.selected &&
    css`
      background: ${buttonColors.clicked};
    `}

    @media ${devices.mobileOnly} {
      margin: 8px 2px;
  }
`;
