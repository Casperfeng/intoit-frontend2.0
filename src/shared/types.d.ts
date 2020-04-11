interface ReduxState {
  courses: Courses;
  courseInfo: any;
  user: any;
  dropdown: Dropdown;
  topics?: Topic[];
  quiz: Quiz;
  router: any;
  schools: Schools;
  resource: {
    feed: any[];
  };
  comments: Comments;
  favoriteCourses: FavoriteCourses;
}

type Courses = Course[];

type FavoriteCourses = FavoriteCourses[];

type Schools = School[];

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
  favorite: boolean;
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

interface IQuestion {
  id: number;
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

interface Comment {
  id: number;
  message: String;
  resource_id: number;
  user_id: number;
  title: String;
  is_report: boolean;
}

type Comments = Comment[];

interface Alternative {
  text: string;
  correct: boolean;
}

type Alternatives = Alternative[];
interface School {
  id: number;
  name: string;
  size: number;
}

interface VotedObject {
  id: number;
  has_voted;
  upvotes: number;
  downvotes: number;
  has_upvoted: boolean;
  has_downvoted: boolean;
}

type VotedExercise = VoteObject & IQuestion;
