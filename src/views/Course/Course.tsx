import React from 'react';
import { match } from 'react-router-dom';

interface RouterParams {
  id: string;
}

interface CourseProps {
  required: string;
  match?: match<RouterParams>;
}

export default function Course(props: CourseProps) {
  const id = props.match.params.id;
  return <div>{id}</div>;
}
