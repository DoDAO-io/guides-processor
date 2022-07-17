import {writeFileSync} from "./../utils/writeFileSync";
import {Course} from '../model/Course';
import {readQuestions} from "./../readers/readQuestions";
import {readReadings} from "./../readers/readReadings";
import {readSummaries} from "./../readers/readSummaries";
import {CourseJson, CourseTopicJson} from "./../model/CourseJson";

export function generateCoursesJson(courseDirPath: string, courseJson: Course) {

  let topicsList: CourseTopicJson[] = courseJson.topics
    .map((topic, index) => ({
      title: topic.title,
      key: topic.key,
      summary: topic.summary,
      description: topic.description,
      order: index,
      questions: topic.questions ? readQuestions(courseDirPath, topic.questions) : [],
      readings: topic.readings ? readReadings(courseDirPath, topic.readings) : [],
      summaries: topic.summaries ? readSummaries(courseDirPath, topic.summaries) : [],
    }));

  const course: CourseJson = {
    key: courseJson.key,
    title: courseJson.title,
    summary: courseJson.summary,
    description: courseJson.description,
    duration: courseJson.duration,
    topics: topicsList
  };

  writeFileSync(`${courseDirPath}/../generated/course.json`, JSON.stringify(course, null, 2))
}

