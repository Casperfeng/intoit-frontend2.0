import React from 'react';
import Title from 'components/Title/Title';
import devices from 'shared/media';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { archiveCourse } from 'redux/duck/courseDetailedDuck';
import Card from '@material-ui/core/Card';
interface Props {
    id: string;
    name: string;
    code: string;
    description: string;
}

// TODO: Implement edit fields for all properties 
const CourseInfoEditor = ({ id, name, code, description }: Props) => {
    const dispatch = useDispatch();

    const onDeleteCourseClick = () => {
        dispatch(archiveCourse(id));
    }

    return (<Wrapper variant="outlined">
        <Title>{name}</Title>
        <p>{code}</p>
        <p>{description}</p>
        {/* Temporarily show the option to delete course */}
        <DeleteButton
            variant="outlined" color="secondary"
            onClick={onDeleteCourseClick}
        >
            ARKIVER FAG
        </DeleteButton>
    </Wrapper>)
}

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media ${devices.laptop} {
        width: 60%;
    }
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    padding: 20px;
`;


const DeleteButton = styled(Button)`
    &.MuiButtonBase-root {
        display: flex;
        align-self: flex-end;
    }

`
export default CourseInfoEditor;