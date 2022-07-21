import { Course } from '@model/Course';
import { readQuestions } from '@readers/readQuestions';
import { readReadings } from '@readers/readReadings';
import { readSummaries } from '@readers/readSummaries';
import { CourseJson, CourseTopicJson } from '@model/CourseJson';

export function getCoursesJson(
  courseDirPath: string,
  courseJson: Course
): CourseJson {
  let topicsList: CourseTopicJson[] = courseJson.topics.map((topic, index) => ({
    title: topic.title,
    key: topic.key,
    summary: topic.summary,
    details: topic.details,
    order: index,
    questions: topic.questions
      ? readQuestions(courseDirPath, topic.questions)
      : [],
    readings: topic.readings ? readReadings(courseDirPath, topic.readings) : [],
    summaries: topic.summaries
      ? readSummaries(courseDirPath, topic.summaries)
      : [],
  }));

  const course: CourseJson = {
    key: courseJson.key,
    title: courseJson.title,
    summary: courseJson.summary,
    details: courseJson.details,
    duration: courseJson.duration,
    topics: topicsList,
  };

  return course;
}
