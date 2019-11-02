export interface CourseProps {
  id: number;
  code: string;
  name: string;
  description?: string;
  color?: string;
}

export interface LinkProps {
  text: string;
  to: string;
}
