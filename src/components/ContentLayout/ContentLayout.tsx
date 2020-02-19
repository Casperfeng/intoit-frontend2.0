import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';

interface Props {
  children?: ReactElement | ReactElement[];
  alignment?: string;
}

export default function ContentLayout({ children, alignment }: Props) {
  const PageContent = styled.div`
    margin: auto;
    max-width: 1224px;
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

  return <PageContent textAlign={alignment}>{children}</PageContent>;
}
