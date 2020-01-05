import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import { fetchCourse } from '../../redux/duck/courseDetailedDuck';
import { fetchTopics } from '../../redux/duck/topicDuck';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function retrieveCourse() {
      await dispatch(fetchCourse(id));
      await dispatch(fetchTopics(id));
      setLoading(false);
    }
    retrieveCourse();
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <ContentLayout alignment={'center'}>
      <Title>Loading...</Title>
    </ContentLayout>
  ) : (
    <ContentLayout alignment={'center'}>
      <Title>{courseInfo.name}</Title>
      <TopicCards topics={topics} />
    </ContentLayout>
  );
}
