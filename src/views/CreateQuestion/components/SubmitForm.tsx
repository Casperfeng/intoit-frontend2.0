import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import StyledLink from 'components/StyledLink/StyledLink';
import { Button, Grid } from '@material-ui/core';

export default function SubmitForm() {
  const param = useParams();

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item>
        <StyledLink to={`/courses/${param.id}`}>
          <CustomButton color="primary" variant="contained">
            Lagre
          </CustomButton>
        </StyledLink>
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
