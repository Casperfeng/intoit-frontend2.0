interface ReduxState {
  courses: Courses;
  fbLogin: FacebookLogin;
  dropdown: Dropdown;
}
interface FacebookLogin {
  token: string;
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
