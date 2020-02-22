import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';

interface Props {
  children?: ReactElement | ReactElement[];
  alignment?: string;
  width?: string;
}

export default function ContentLayout({ children, alignment, width }: Props) {
  return (
    <PageContent textAlign={alignment} width={width}>
      {children}
    </PageContent>
  );
}

const PageContent = styled.div`
  margin: auto;
  max-width: ${props => (props.width ? props.width : '1272px')};
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
