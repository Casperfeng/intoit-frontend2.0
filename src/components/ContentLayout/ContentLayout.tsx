import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactElement;
  alignment?: string;
}

const PageContent = styled.div`
  margin: auto;
  width: 100%;
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

export default function ContentLayout({ children, alignment }: Props) {
  return <PageContent textAlign={alignment}>{children}</PageContent>;
}
