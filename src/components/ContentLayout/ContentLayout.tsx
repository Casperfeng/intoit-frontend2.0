import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';

interface Props {
  children?: ReactElement | ReactElement[];
  alignment?: string;
  maxWidth?: string;
  width?: string;
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
  padding: 0 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-content: center;
  ${props =>
    props.textAlign === 'center' &&
    css`
      text-align: center;
    `}
`;
