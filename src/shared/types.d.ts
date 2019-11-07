interface ReduxState {
  courses: Courses;
}

interface CoursesResponse {
  entities?: {
    [name: string]: Course;
  };
}

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

interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
  color?: string;
}

interface IntoitLinkProps {
  text: string;
  to: string;
  linkType?: string;
}

interface DropdownProps {
  clicked: boolean;
}
