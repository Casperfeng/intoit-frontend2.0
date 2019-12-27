import React from 'react';
import styled from 'styled-components';
import TestIcon from '../../../../assets/icons/onlineTestIcon.svg';
//import BookIcon from '../../../../assets/icons/bookIcon.svg';

interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
}

const CourseBox = styled.div`
  position: relative;
  width: 250px;
  height: 301px;
  min-width: 250px;
  border: 1px solid black;
  background-color: white;
  box-shadow: -2px 1px 2px -2px #f2f2f2;
  margin: 10px 10px;
  cursor: pointer;
  :hover {
    width: 260px;
    margin: 0px;
  }
`;

const CourseBoxContent = styled.div`
  position: relative;
  color: white;
  background-color: rgb(53, 152, 219, 0.8);
  display: flex;
  flex-direction: column;
`;

const CourseBoxText = styled.p`
  padding: 0 10px;
  height: 30px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const CourseBoxInfo = styled.div`
  margin-left: 30px;
  overflow: hidden;
  background-color: rgb(53, 152, 219, 0.8);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 235px;
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

const CourseIcon = styled.img`
  position: absolute;
  height: 175px;
  width: 175px;
  top: 65px;
  left: 40px;
`;

export default function CourseCard({
  id,
  code,
  name,
  description
}: CourseProps) {
  return (
    <CourseBox>
      <CourseBoxContent>
        <CourseBoxText>{name}</CourseBoxText>
        <CourseIcon src={TestIcon}></CourseIcon>
        <CourseBoxInfo>
          <CourseBoxSchool>NTNU</CourseBoxSchool>
          <CourseBoxCode>{code}</CourseBoxCode>
          <CourseBoxUpdated>Sist oppdatert 3 måneder siden</CourseBoxUpdated>
        </CourseBoxInfo>
      </CourseBoxContent>
    </CourseBox>
  );
}
