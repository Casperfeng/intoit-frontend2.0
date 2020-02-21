interface ReduxState {
  courses: Courses;
  courseInfo: any;
  login: FacebookLogin;
  dropdown: Dropdown;
  topics?: Topic[];
  quiz: Quiz;
}
interface FacebookLogin {
  token?: string;
}

type Courses = Course[];

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

interface Question {
  collection_id: number;
  content: any;
  modified: Date;
  created: Date;
  user_id: number;
  username: string;
  experience: integer;
  upvotes: integer;
  downvotes: integer;
  subject_id: integer;
  is_archived: boolean;
  history?: any;
  type: string;
  modify_reason: string;
  hint?: string;
  explanation?: string;
  c_m: integer;
  w_m: integer;
  w_a: integer;
  c_a: integer;
  has_hint: boolean;
}

interface Quiz {
  hasPostedAnswers: boolean;
  exercises: Question[];
  index: integer;
}

interface Alternative {
  text: string;
  correct: boolean;
}

type Alternatives = Alternative[];
