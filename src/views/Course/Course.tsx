import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { match } from 'react-router-dom';
import { fetchCourse } from '../../redux/duck/courseDetailedDuck';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import Title from '../../components/Title/Title';

interface RouterParams {
  id: string;
}

interface CourseProps {
  required: string;
  match?: match<RouterParams>;
}

export default function Course(props: CourseProps) {
  const id = props.match.params.id;
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourse(id));
    // eslint-disable-next-line
  }, []);
  return (
    <ContentLayout alignment={'center'}>
      <Title text={courseInfo.name}></Title>
    </ContentLayout>
  );
}
