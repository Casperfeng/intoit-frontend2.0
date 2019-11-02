import React from 'react';
import styled from 'styled-components';
import { CourseProps } from '../../shared/types';

export default function CourseCard(props: CourseProps) {
  const CourseBox = styled.div`
    position: relative;
    width: 200px;
    height: 225px;
    min-width: 200px;
    background-color: white;
    box-shadow: 0.3px 0.1px 0.3px 0.3px #d3d3d3;
    margin: 10px 10px;
    background-color: ${props.color ? props.color : 'white'};
    cursor: pointer;
    :hover {
      border-bottom: 10px solid red;
    }
  `;

  const CourseBoxContent = styled.div`
    position: relative;
    color: white;
    background-color: rgba(70, 70, 70, 0.6);
    display: flex;
    flex-direction: column;
  `;

  const CourseBoxText = styled.p`
    height: 30px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
  `;

  const CourseBoxInfo = styled.p`
    margin-left: 30px;
    overflow: hidden;
    background-color: rgba(70, 70, 70, 0.6);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 160px;
    margin: auto;
  `;

  const CourseBoxSchool = styled.p`
    display: flex;
    font-size: 12px;
    margin: 10px auto 0 10px;
  `;

  const CourseBoxCode = styled.p`
    display: flex;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto 0 10px;
  `;

  const CourseBoxUpdated = styled.p`
    display: flex;
    font-size: 12px;
    font-weight: 500px;
    margin: 0 auto 0 10px;
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
