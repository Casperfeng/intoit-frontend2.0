import React, { useEffect } from 'react';
import { match } from 'react-router-dom';
import axios from 'axios';
import { fetchCourse } from '../../utils/api';

interface RouterParams {
  id: string;
}

interface CourseProps {
  required: string;
  match?: match<RouterParams>;
}

export default function Course(props: CourseProps) {
  const id = props.match.params.id;
  let course;
  useEffect(() => {
    course = fetchCourse(id);
  }, []);
  return <div>{id}</div>;
}
