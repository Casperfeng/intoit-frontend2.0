import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from "@material-ui/core";
import colors from 'shared/colors';

interface Props {
  children?: string;
  bgcolor?: string;
  margin?: string;
  size?: 'small' | 'medium' | 'large',
  type?: 'submit' | 'button'
}

// Add more buttons if needed (e.g: NakedButton/SecondaryBtn?)
// Refactor app and use buttons from this component only
// TODO: type as props
export default function PrimaryButton({ children, bgcolor, margin, size, type }: Props) {
  console.log('type :', type);
  return (
    <StyledButton type={type} variant="contained" color="primary" bgcolor={bgcolor} margin={margin} size={size}>
      {children}
    </StyledButton>
  );
}


const StyledButton = styled(Button)`
  &.MuiButton-containedPrimary {
    background-color: ${props => props.bgcolor ? props.bgcolor : colors.default};
    margin: ${props => props.margin ? props.margin : 0};
    min-width: 140px;
  }
`;
