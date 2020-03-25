import React from 'react';
import styled from 'styled-components/macro';
import Title from 'components/Title/Title';

interface Props {
    name: string;
    description: string;
}

export default function Course({ name, description }: Props) {
    return (
        <Wrapper>
            <Title>{name}</Title>
            <CourseCode>TMT1322</CourseCode>
            <p>Spørsmålene er hovedsaklig basert på og kategorisert etter emner fra eksamner 2013-2016 + øvingsopplegget og forelesningsnotater fra høsten 2016.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: 0 0 32px;
  width: 50%;
  font-size:18px;

  h1 { 
      margin-bottom: 12px;
  }

`

const CourseCode = styled.p`
    margin-bottom: 24px;
`
