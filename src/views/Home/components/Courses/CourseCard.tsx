import React from 'react';
import styled from 'styled-components';

interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
  color?: string;
}

export default function CourseCard(props: CourseProps) {
  const CourseBox = styled.div`
    position: relative;
    width: 250px;
    height: 300px;
    min-width: 250px;
    background-color: white;
    box-shadow: 0.3px 0.1px 0.3px 0.3px #d3d3d3;
    margin: 10px 10px;
    background-color: ${props.color ? props.color : 'white'};
    cursor: pointer;
    :hover {
      width: 260px;
      margin: 0px;
    }
  `;

  const CourseBoxContent = styled.div`
    position: relative;
    color: white;
    background-color: rgba(50, 50, 50, 0.5);
    display: flex;
    flex-direction: column;
  `;

  const CourseBoxText = styled.div`
    padding: 0 10px;
    height: 30px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
  `;

  const CourseBoxInfo = styled.div`
    margin-left: 30px;
    overflow: hidden;
    background-color: rgba(50, 50, 50, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 235px;
    margin: auto;
  `;

  const CourseBoxSchool = styled.div`
    display: flex;
    font-size: 12px;
    margin: 10px auto 0 10px;
  `;

  const CourseBoxCode = styled.div`
    display: flex;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    margin: 0 auto 0 10px;
  `;

  const CourseBoxUpdated = styled.div`
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
