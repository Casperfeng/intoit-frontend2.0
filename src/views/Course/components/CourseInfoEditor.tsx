import React from 'react';
import Title from 'components/Title/Title';
import devices from 'shared/media';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { archiveCourse } from 'redux/duck/courseDetailedDuck';

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

    return (<Wrapper>
        <Title>{name}</Title>
        <p>{code}</p>
        <p>{description}</p>
        {/* Temporarily show the option to delete course */}
        <Button
            variant="outlined" color="secondary"
            onClick={onDeleteCourseClick}
        >
            ARKIVER FAG
        </Button>
    </Wrapper>)
}

// ? Maybe a material ui card is better, with blue outline;
const Wrapper = styled.div`
    width: 60%;
    border: 2px solid ${colors.primary};
    border-radius: 5px;
    padding: 20px;
`


export default CourseInfoEditor;