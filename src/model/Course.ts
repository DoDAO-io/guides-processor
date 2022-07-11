import { CourseTopics } from './CourseTopics';

export interface Course {
  title: string;
  summary: string;
  description: string;
  duration: string;
  topics: CourseTopics[];
}
