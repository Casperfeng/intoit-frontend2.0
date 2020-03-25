import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import { fetchCourse } from '../../redux/duck/courseDetailedDuck';
import { fetchTopics } from '../../redux/duck/topicDuck';
import { fetchFeeds } from 'redux/duck/resourceDuck';
import StyledLink from 'components/StyledLink/StyledLink';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Animation from '../../components/Animation/Animation';
import Title from '../../components/Title/Title';
import styled from 'styled-components/macro';
import CourseInfo from './components/CourseInfo'
import TopicCard from './components/TopicCard';
import colors from 'shared/colors';

interface RouterParams {
  id: string;
}

interface CourseProps {
  required: string;
  match?: match<RouterParams>;
}

export default function Course(props: CourseProps) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const topics = useSelector((state: ReduxState) => state.topics);
  const feed = useSelector((state: ReduxState) => state.resource.feed);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveCourse() {
      await dispatch(fetchCourse(id));
      await dispatch(fetchTopics(id));
      await dispatch(fetchFeeds(id));
      setLoading(false);
    }
    retrieveCourse();
    //eslint-disable-next-line
  }, []);

  return (
    <ContentLayout>
      {isLoading ? <>
        <Title>Laster inn fag...</Title>
        <Animation type={'seagull'} />
      </> : <>
          <CourseInfo name={courseInfo.name} description={courseInfo.description} />
          <StyledLink to={`/lastUpdate/${id}`}><LastUpdate>Siste oppdatteringer ({feed.length})</LastUpdate> </StyledLink>
          <TopicList>
            {topics.map(topic => (
              <TopicCard
                id={topic.id}
                name={topic.name}
                subjectId={topic.subjectId}
                size={topic.size}
                key={topic.id}
              />
            ))}
          </TopicList>
        </>}
    </ContentLayout>
  )
}

const TopicList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
`;

const LastUpdate = styled.p`
  text-align: end;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #2196F3;
  font-weight: 500;
`