import { CourseTopics } from './CourseTopics';

export interface Course {
  key: string;
  title: string;
  summary: string;
  description: string;
  duration: string;
  topics: CourseTopics[];
}
