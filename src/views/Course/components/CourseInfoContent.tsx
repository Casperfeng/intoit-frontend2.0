import React from 'react';
import Title from 'components/Title/Title';
import devices from 'shared/media';
import styled from 'styled-components/macro';

interface Props {
    name: string;
    code: string;
    description: string;
}

const CourseInfoContent = ({ name, code, description }: Props) => {
    return (<Content><Title>{name}</Title>
        <CourseCode>TMT1322</CourseCode>
        <CourseCode>{code}</CourseCode>
        <p>{description}</p>
    </Content>)
}

const Content = styled.div`
  @media ${devices.laptop} {
    min-width: 40%;
    max-width: 50%;
  }

  h1 { 
      margin-bottom: 12px;
  }
`

const CourseCode = styled.p`
    margin-bottom: 24px;
`

export default CourseInfoContent;