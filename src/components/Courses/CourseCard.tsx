import React from 'react';
import styled from 'styled-components';
import { CourseProps } from '../../shared/types';

export default function CourseCard(props: CourseProps) {
  const CourseBox = styled.div`
    position: relative;
    width: 200px;
    height: 225px;
    background-color: white;
    box-shadow: 0.3px 0.1px 0.3px 0.3px #d3d3d3;
    border: 0.5px solid #d3d3d3;
    border-radius: 15px;
    margin: 10px 10px;
    background-color: ${props.color ? props.color : 'white'};
    cursor: pointer;
    :hover {
      border: 3px solid black;
      margin: 7px 7px;
    }
  `;

  const CourseBoxContent = styled.div`
    position: relative;
    color: white;
    background-color: rgba(70, 70, 70, 0.6);
    border-radius: 12px 12px 0px 0px;
    display: flex;
    flex-direction: column;
  `;

  const CourseBoxText = styled.p`
    height: 30px;
    padding: 1% 0 1% 4%;
    font-weight: bold;
    font-size: 18px;
  `;

  const CourseBoxInfo = styled.p`
    overflow: hidden;
    background-color: rgba(70, 70, 70, 0.6);
    position: absolute;
    height: 100%;
    width: 96%;
    padding: 2% 0 0 4%;
    top: 150px;
    margin: auto;
    border-radius: 0px 0px 15px 15px;
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
