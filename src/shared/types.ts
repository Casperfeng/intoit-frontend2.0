export interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
  color?: string;
}

export interface IntoitLinkProps {
  text: string;
  to: string;
}
