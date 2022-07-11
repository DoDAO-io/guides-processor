import fs from 'fs';
import { generateQuestions } from './generateQuestions';
import { writeFileSync } from '../utils/writeFileSync';
import { Course } from '../model/Course';
import YAML from 'yaml';
import dedent from 'dedent-js';

function generateCourseTopicsTable(courseDirPath: string, courseJson: Course) {
  return courseJson.topics
    .map((topic, index) => {
      let questionLink = '';
      if (topic.questions) {
        generateQuestions(courseDirPath, topic.title, topic.questions);

        // prettier-ignore
        questionLink = `[Questions](generated/questions/${topic.questions.replace('.yaml', '')}.md)`;
      }

      // prettier-ignore
      return `| ${index + 1}      | ${topic.title} | Description |  |  | ${questionLink} | ${topic.status} | ${topic.completionWeek} |`
    })
    .join('\n ');
}

export function generateCourseReadme(courseDirPath: string) {
  const courseFile = fs.readFileSync(`${courseDirPath}/course.yaml`, 'utf8');
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');
  const courseJson = YAML.parse(courseFile) as Course;

  if (!fs.existsSync(`${courseDirPath}/../generated`)) {
    fs.mkdirSync(`${courseDirPath}/../generated`);
  }

  if (!fs.existsSync(`${courseDirPath}/../generated/questions`)) {
    fs.mkdirSync(`${courseDirPath}/../generated/questions`);
  }

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
