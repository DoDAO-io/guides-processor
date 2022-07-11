import fs from 'fs';
import { writeFileSync } from '../utils/writeFileSync';
import { Course } from '../model/Course';
import YAML from 'yaml';
import dedent from 'dedent-js';

export function generateCourseReadme(courseDirPath: string) {
  const courseFile = fs.readFileSync(`${courseDirPath}/course.yaml`, 'utf8');
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');
  const courseJson = YAML.parse(courseFile) as Course;

  // prettier-ignore
  const courseReadmeContents =
    dedent`${header}
    ---

    ## ${courseJson.title}
    ${courseJson.summary}
    
    ## Description
    ${courseJson.description}
    
    ## Chapters
    
    | S.No      | Title | Description | Status | Completion Week |
    | ----------- | ----------- |----------- |----------- |----------- |
    ${courseJson.topics.map((topic, index) => `| ${index + 1}      | ${topic.title} | Description | ${topic.status} | ${topic.completionWeek} |` ).join('\n ')} 
   
    `;

  writeFileSync(`${courseDirPath}/../README.md`, courseReadmeContents);
}
