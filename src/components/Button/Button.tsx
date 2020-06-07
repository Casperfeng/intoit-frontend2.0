import React from 'react';
import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import colors from 'shared/colors';

interface Props {
  children?: any;
  bgcolor?: string;
  margin?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  onClick?: () => any;
}

// Add more buttons if needed (e.g: NakedButton?)
export default function PrimaryButton({ children, bgcolor, margin, size, type, onClick }: Props) {
  return (
    <StyledButton type={type} variant="contained" color="primary" bgcolor={bgcolor} margin={margin} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export function SecondaryButton({ children, bgcolor, margin, size, type, onClick }: Props) {
  return (
    <StyledButton type={type} variant="contained" bgcolor={bgcolor} margin={margin} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export function DeleteButton({ children, bgcolor, margin, size, type, onClick }: Props) {
  return (
    <StyledButton type={type} variant="contained" color="secondary" bgcolor={bgcolor} margin={margin} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export function OutlinedButton({ children, bgcolor, margin, size, type, onClick }: Props) {
  return (
    <StyledButton type={type} variant="outlined" bgcolor={bgcolor} margin={margin} size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)<{ bgcolor?: string; margin?: string }>`
  min-width: 140px;
  max-width: fit-content;

  &.MuiButton-containedPrimary {
    background-color: ${props => (props.bgcolor ? props.bgcolor : colors.default)};
    margin: ${props => (props.margin ? props.margin : 0)};
  }

  &.MuiButton-outlined {
    margin: ${props => (props.margin ? props.margin : 0)};
  }
`;
