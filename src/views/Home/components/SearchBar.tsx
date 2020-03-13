import React, { useState } from 'react';
import styled from 'styled-components/macro';
import devices from 'shared/media';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search } from '@styled-icons/material';

interface SearchFieldProps {
  onSearch: any;
}

const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [inputTimeout, setInputTimeout] = useState(0);

  const handleQueryFinished = async queryValue => {
    await window.clearTimeout(inputTimeout);
    onSearch(queryValue);
  };

  const handleChange = async event => {
    const value = event.target.value;
    // Clear the old timeout
    await window.clearTimeout(inputTimeout);
    // Start a new timeout and set isTyping=true
    setInputTimeout(
      window.setTimeout(() => {
        handleQueryFinished(value);
      }, 350),
    );
  };

  return (
    <StyledTextField
      id="outlined-search"
      label="Søk etter emne"
      type="search"
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search size={22} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;

const StyledTextField = styled(TextField)`
  min-width: 300px;
  @media ${devices.mobileOnly} {
    order: -1;
  }
`;
