import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';
import devices from 'shared/media';

interface Props {
  children?: ReactElement | ReactElement[];
  alignment?: string;
  maxWidth?: string;
  width?: string;
  placeContent?: boolean;
}

export default function ContentLayout({ children, alignment, width, maxWidth }: Props) {
  return (
    <PageContent textAlign={alignment} width={width} maxWidth={maxWidth}>
      {children}
    </PageContent>
  );
}

const PageContent = styled.div`
  margin: auto;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '1272px')};
  width: ${props => (props.width ? props.width : 'initial')};
  padding: 32px 24px;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  place-content: ${props => (props.placeContent ? 'center' : 'start')};
  ${props =>
    props.textAlign === 'center' &&
    css`
      text-align: center;
    `}
  
  @media ${devices.mobileOnly} {
    width: 90%;
    padding: 0;
  }
  
`;
