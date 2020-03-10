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
import TopicCards from './components/TopicCards';

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

  // ? Andreas: Sjekk om vi får feeds fra redux
  console.log('feeds', feed);

  useEffect(() => {
    async function retrieveCourse() {
      await dispatch(fetchCourse(id));
      await dispatch(fetchTopics(id));
      await dispatch(fetchFeeds(id));
      setLoading(false);
    }
    retrieveCourse();
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <ContentLayout alignment={'center'}>
      <Title>Laster inn fag...</Title>
      <Animation type={'seagull'} />
    </ContentLayout>
  ) : (
      <ContentLayout alignment={'center'}>
        <Title>{courseInfo.name}</Title>
        <TopicCards topics={topics} />

        {/* // ? Her bruker jeg feed.length til å vise antall oppdateringer */}
        <StyledLink to={'/'}>Siste oppdatteringer ({feed.length}) </StyledLink>
      </ContentLayout>
    );
}
