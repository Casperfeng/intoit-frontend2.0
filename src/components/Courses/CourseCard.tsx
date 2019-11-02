import React from 'react';
import styled from 'styled-components';
import { CourseProps } from '../../shared/types';

export default function CourseCard(props: CourseProps) {
  const CourseBox = styled.div`
    width: 200px;
    height: 225px;
    background-color: white;
    box-shadow: 0.3px 0.1px 0.3px 0.3px #d3d3d3;
    border: 0.5px solid #d3d3d3;
    border-radius: 25px;
    margin: 10px 10px;
    background-color: ${props.color ? props.color : 'white'};
    cursor: pointer;
    :hover {
      margin: 0px;
      width: 220px;
      height: 245px;
    }
  `;

  const CourseBoxContent = styled.div`
    position: relative;
    color: ${props.color ? 'white' : 'black'};
    display: flex;
    flex-direction: column;
  `;

  const CourseBoxText = styled.p`
    padding: 10px;
    font-weight: bold;
    margin: 0px auto 5px auto;
    font-size: 18px;
  `;

  const CourseBoxInfo = styled.p`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 140px;
    margin: auto;
    padding: 10px;
  `;

  const CourseBoxSchool = styled.p`
    display: flex;
    font-size: 12px;
    margin: auto 0;
  `;

  const CourseBoxCode = styled.p`
    display: flex;
    margin: auto;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
  `;

  const CourseBoxUpdated = styled.p`
    display: flex;
    margin: auto;
    font-size: 12px;
    font-weight: 300px;
  `;

  return (
    <CourseBox>
      <CourseBoxContent>
        <CourseBoxText>{props.name}</CourseBoxText>
        <CourseBoxInfo>
          <CourseBoxSchool>NTNU</CourseBoxSchool>
          <CourseBoxCode>{props.code}</CourseBoxCode>
          <CourseBoxUpdated>Sist oppdatert 3 måneder siden</CourseBoxUpdated>
        </CourseBoxInfo>
      </CourseBoxContent>
    </CourseBox>
  );
}
