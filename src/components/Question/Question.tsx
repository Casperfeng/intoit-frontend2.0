import React from 'react';
import styled from 'styled-components/macro';
import colors from 'shared/colors';

interface Props {
  text: string,
  credit?: string,
  imgSrc?: string,
}

export default function Question({ text, credit, imgSrc }: Props) {
  return (
    <Wrapper>
      <QuestionText>
        {text}
      </QuestionText>
      {imgSrc && <img alt="question related" src={imgSrc} />}
      <Credit>Laget av {credit}</Credit>
    </Wrapper>
  )
}


const Credit = styled.p`
  font-size: 12px;
  font-style: italic;
  font-weight: 300;
  color: ${colors.blackLight};
  text-align: end;
  margin-bottom: 36px;
`;

const QuestionText = styled.h1`
  font-weight: normal;
  font-size: 20px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 5px;

  img {
    max-width: 100%;
    object-fit: contain;
  }
`