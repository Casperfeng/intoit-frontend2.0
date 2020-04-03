import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import colors from 'shared/colors';
import CourseInfoContent from './CourseInfoContent';
import CourseInfoEditor from './CourseInfoEditor';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
  name: string;
  code: string;
  description: string;
}

export default function Course({ id, name, code, description }: Props) {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {editMode ? (
        <CourseInfoEditor id={id} name={name} code={code} description={description} />
      ) : (
        <CourseInfoContent name={name} code={code} description={description} />
      )}
      {!editMode && (
        <EditButton onClick={() => dispatch(push(`/courseeditor/${id}`))}>
          <EditAlt size={30} />
        </EditButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0 32px;
  display: flex;
  width: 100%;
  font-size: 18px;
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
