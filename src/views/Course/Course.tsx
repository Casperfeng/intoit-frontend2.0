import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import { fetchCourse } from '../../redux/duck/courseDetailedDuck';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Title from '../../components/Title/Title';
import QuizCards from './components/QuizCards';

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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (courseInfo.id !== id) {
      dispatch(fetchCourse(id));
    }
    // eslint-disable-next-line
  }, [isLoading]);

  if (courseInfo.id === id) {
    setLoading(false);
  }

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <ContentLayout alignment={'center'}>
      <Title>{courseInfo.name}</Title>
      <QuizCards />
    </ContentLayout>
  );
}
