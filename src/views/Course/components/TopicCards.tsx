import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../../components/Title/SubTitle';
import TopicCard from './TopicCard';

interface TopicCardsProps {
  topics: Topic[];
}

export default function TopicCards({ topics }: TopicCardsProps) {
  const TopicWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const topicCards = topics.map(topic => (
    <TopicCard
      id={topic.id}
      name={topic.name}
      subjectId={topic.subjectId}
      size={topic.size}
      key={topic.id}
    />
  ));

  return (
    <>
      <SubTitle>Alle temaer</SubTitle>
      <TopicWrapper>{topicCards}</TopicWrapper>
    </>
  );
}
