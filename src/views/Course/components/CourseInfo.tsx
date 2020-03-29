import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Title from 'components/Title/Title';
import devices from 'shared/media';
import { Button } from "@material-ui/core";
import { archiveCourse } from 'redux/duck/courseDetailedDuck';
import { useDispatch } from 'react-redux';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
import colors from 'shared/colors';
import CourseInfoContent from './CourseInfoContent';
import CourseInfoEditor from './CourseInfoEditor';

interface Props {
    id: string;
    name: string;
    code: string;
    description: string;
}

export default function Course({ id, name, code, description }: Props) {
    const [editMode, setEditMode] = useState(false);

    const dispatch = useDispatch();
    console.log('id :', id);

    const onDeleteCourseClick = () => {
        dispatch(archiveCourse(id));
    }

    return (
        <Wrapper>
            {editMode ?
                <CourseInfoEditor id={id} name={name} code={code} description={description} /> :
                <CourseInfoContent name={name} code={code} description={description} />}
            {!editMode && <EditButton onClick={() => setEditMode(true)}>
                <EditAlt size={30} />
            </EditButton>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 0 0 32px;
  display: flex;
  width: 100%;
  font-size:18px;
`
{/* Temporarily show the option to delete course */ }
{/* <Button
variant="outlined" color="secondary"
onClick={onDeleteCourseClick}
>
ARKIVER FAG
</Button> */}


const EditButton = styled(Button)`
  &.MuiButtonBase-root {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
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
        content: 'REDIGER'
    }  
   }
`
