import dedent from 'dedent-js';
import fs from 'fs';
import { generateSummaries } from './generateSummaries';
import YAML from 'yaml';
import { Course } from '../model/Course';
import { writeFileSync } from '../utils/writeFileSync';
import { generateQuestions } from './generateQuestions';
import { generateReadings } from './generateReadings';
import { generateCoursesJson } from './generateCoursesJson';

function generateCourseTopicsTable(courseDirPath: string, courseJson: Course) {
  return courseJson.topics
    .map((topic, index) => {
      let questionLink = '';
      if (topic.questions) {
        generateQuestions(courseDirPath, topic.title, topic.questions);

        // prettier-ignore
        questionLink = `[Questions](generated/questions/${topic.questions.replace('.yaml', '')}.md)`;
      }

      let readingLink = '';
      if (topic.readings) {
        generateReadings(courseDirPath, topic.title, topic.readings);

        // prettier-ignore
        readingLink = `[Reading List](generated/readings/${topic.readings.replace('.yaml', '')}.md)`;
      }

      let summariesLink = '';
      if (topic.summaries) {
        generateSummaries(courseDirPath, topic.title, topic.summaries);

        // prettier-ignore
        summariesLink = `[Summary](generated/summaries/${topic.summaries.replace('.yaml', '')}.md)`;
      }

      // prettier-ignore
      return `| ${index + 1}      | ${topic.title} | Description | ${summariesLink} | ${readingLink} | ${questionLink} | ${topic.status} | ${topic.completionWeek} |`
    })
    .join('\n ');
}

function generateCourseTable(header: string, courseJson: Course, courseDirPath: string) {
  // prettier-ignore
  const courseReadmeContents =
    dedent`${header}
    ---

    ## ${courseJson.title}
    ${courseJson.summary}
    
    ## Description
    ${courseJson.description}
    
    ## Chapters
    
    | S.No      | Title | Description |Contents |Reading List| Questions | Status | Completion Week |
    | ----------- | ----------- |----------- |----------- |----------- |----------- | ----------- | ----------- |
    ${(generateCourseTopicsTable(courseDirPath, courseJson))} 
   
    `;

  writeFileSync(`${courseDirPath}/../README.md`, courseReadmeContents);
}

export function generateCourseFiles(courseDirPath: string) {
  const courseFile = fs.readFileSync(`${courseDirPath}/course.yaml`, 'utf8');
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');
  const courseJson = YAML.parse(courseFile) as Course;

  if (!fs.existsSync(`${courseDirPath}/../generated`)) {
    fs.mkdirSync(`${courseDirPath}/../generated`);
  }

  if (!fs.existsSync(`${courseDirPath}/../generated/questions`)) {
    fs.mkdirSync(`${courseDirPath}/../generated/questions`);
  }

  if (!fs.existsSync(`${courseDirPath}/../generated/readings`)) {
    fs.mkdirSync(`${courseDirPath}/../generated/readings`);
  }

  if (!fs.existsSync(`${courseDirPath}/../generated/summaries`)) {
    fs.mkdirSync(`${courseDirPath}/../generated/summaries`);
  }

  generateCourseTable(header, courseJson, courseDirPath);

  generateCoursesJson(courseDirPath, courseJson);
}
