import React from 'react';
import styled from 'styled-components';
import { CourseProps } from '../../shared/types';

const CourseBox = styled.div`
  padding: 10px;
  width: 150px;
  height: 175px;
  text-align: center;
  background-color: white;
  box-shadow: 0.3px 0.1px 0.3px 0.3px #d3d3d3;
  border: 0.5px solid #d3d3d3;
  border-radius: 25px;
  margin: 10px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  :hover {
    margin: 0px;
    width: 170px;
    height: 195px;
  }
`;

const CourseBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
`;

const CourseBoxText = styled.p`
  margin: 10px auto 5px auto;
  font-size: 14px;
  justify-self: center;
`;

const CourseBoxCode = styled.p`
  margin: 70px auto 5px auto;
  font-size: 18px;
  font-weight: 700;
  margin: auto;
  text-transform: uppercase;
`;

export default function CourseCard(props: CourseProps) {
  return (
    <CourseBox>
      <CourseBoxContent>
        <CourseBoxCode>{props.code}</CourseBoxCode>
        <CourseBoxText>{props.name}</CourseBoxText>
      </CourseBoxContent>
    </CourseBox>
  );
}
