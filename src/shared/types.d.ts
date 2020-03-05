interface ReduxState {
  courses: Courses;
  courseInfo: any;
  user: any;
  dropdown: Dropdown;
  topics?: Topic[];
  schools: Schools;
}

type Courses = Course[];

type Schools = School[]

type Dropdown = boolean;

interface Course {
  id: number;
  code: string;
  name: string;
  description?: string;
  modified: Date;
  created: Date;
  school_id: number;
  published: boolean;
  link?: any;
  is_archived: boolean;
  school: string;
  color?: string;
  n_exercises: string;
  n_topics: number;
  progression: number;
  n_favorites_all_time: 39;
  n_favorites_this_semester: number;
  favorite?: boolean;
}
interface User {
  id: string;
  username: string;
  experience: number;
  facebook_id: string;
}

interface Topic {
  id: number;
  name: string;
  subjectId: number;
  size: number;
  modified?: Date;
  created?: Date;
  description?: string;
  correctlyAnswered?: number;
  mcSize?: number;
  fcSize?: number;
  isArchived?: boolean;
}

interface School {
  id: number;
  name: string;
  size: number;
}
