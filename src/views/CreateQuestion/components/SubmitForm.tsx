import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import StyledLink from 'components/StyledLink/StyledLink';
import { Button, Grid } from '@material-ui/core';

interface Props {
  onSubmit: () => void;
}

export default function SubmitForm({ onSubmit }: Props) {
  const param = useParams();

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <CustomButton color="primary" variant="contained" onClick={onSubmit}>
          Lagre
        </CustomButton>
      </Grid>
      <Grid item>
        <StyledLink to={`/courses/${param.id}`}>
          <CustomButton color="primary" variant="outlined">
            Avbryt
          </CustomButton>
        </StyledLink>
      </Grid>
    </Grid>
  );
}

const CustomButton = styled(Button)`
  width: 120px;
`;
