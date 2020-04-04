import React from 'react';
import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import colors from 'shared/colors';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import Title from 'components/Title/Title';
import devices from 'shared/media';

interface Props {
  id: string;
  name: string;
  code: string;
  description: string;
}

export default function Course({ id, name, code, description }: Props) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Content>
        <Title>{name}</Title>
        <CourseCode>TMT1322</CourseCode>
        <CourseCode>{code}</CourseCode>
        <p>{description}</p>
      </Content>

      <EditButton onClick={() => dispatch(push(`/courseeditor/${id}`))}>
        <EditAlt size={30} />
      </EditButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0 32px;
  display: flex;
  width: 100%;
  font-size: 18px;
`;

const Content = styled.div`
  @media ${devices.laptop} {
    max-width: 50%;
  }

  h1 {
    margin-bottom: 12px;
  }
`;

const CourseCode = styled.p`
  margin-bottom: 24px;
`;

const EditButton = styled(Button)`
  &.MuiButtonBase-root {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    margin-left: 16px;
  }

  svg {
    min-width: 30px;
    min-height: 30px;
    cursor: pointer;
    transition: 0.2s all ease-in;
  }

  &:hover {
    * {
      color: ${colors.primary};
    }

    min-width: 100px;
    .MuiButton-label:after {
      content: 'REDIGER';
    }
  }
`;
