import React from 'react';
import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';
import Question from 'components/Question/Question';
import Alternatives from 'components/Alternatives/Alternatives';

interface Props {
  content: any;
  credit: string;
}

export default function MultipleChoice({ content, credit }: Props) {
  return (
    <Wrapper>
      <Question text={content.question.text} credit={credit} imgSrc={content.question.img && content.question.img.src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 1000px; */
`;
