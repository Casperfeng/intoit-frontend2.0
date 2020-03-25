import { Button, ButtonGroup } from "@material-ui/core";
import colors from 'shared/colors';
import styled from 'styled-components';


export const AlternativeButton = styled(Button)`
  &.MuiButton-outlinedPrimary {
    border-color: ${colors.lightGrey};
    color: ${props => props.textcolor ? props.textcolor : 'black'}
  }

  &.MuiButton-root {
    text-transform: initial;
    font-weight: normal;
    letter-spacing: initial;
  }

  > .MuiButton-label {
    justify-content: start;
    text-align: start;
  }

  min-height: 50px;
`;

export const AlternativeGroup = styled(ButtonGroup)`
  margin: 0 0 30px;
`;
