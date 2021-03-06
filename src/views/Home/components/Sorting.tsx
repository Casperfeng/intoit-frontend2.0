import React, { useState } from 'react';
import devices from 'shared/media';
import styled from 'styled-components/macro';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface SortingProps {
  onSort: Function;
}

export default function Sorting({ onSort }: SortingProps) {
  const options = [
    {
      value: 'n_favorites_this_semester',
      label: 'Mest populære dette semesteret',
      sortOrder: 'desc',
    },
    { value: 'name', label: 'Alfabetisk', sortOrder: 'asc' },
    { value: 'modified', label: 'Sist endret', sortOrder: 'desc' },
  ];

  const [sorting, setSorting] = useState(options[0].value);

  const handleChange = event => {
    setSorting(event.target.value);
    onSort(options.find(field => field.value === event.target.value));
  };

  const menuitems = options.map((option, i) => (
    <MenuItem key={i} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <Wrapper>
      <FormControl>
        <StyledSelect labelId="sort-courses" id="sort-courses" value={sorting} onChange={handleChange}>
          {menuitems}
        </StyledSelect>
      </FormControl>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media ${devices.mobileOnly} {
    align-self: center;
    padding: 10px;
  }
`;

const StyledSelect = styled(Select)`
  min-width: 260px;
  margin-bottom: 25px;
`;
