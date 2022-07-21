import dedent from 'dedent-js';
import fs from 'fs';
import { generatedFileLinks } from '@utils/generatedFileLinks';
import { CourseTopics } from '@model/CourseTopics';
import { writeFileSync } from '@utils/writeFileSync';

export function generateTopicDetails(
  courseDirPath: string,
  topic: CourseTopics
) {
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');

  const { questionsLink, readingsLink, summariesLink } = generatedFileLinks(
    topic,
    './../../'
  );

  const topicsReadmeContents = dedent`
    ${header}
    ---
    
    ## ${topic.title}
     
    ${topic.details}
    
    ## Links
    ${readingsLink}
    
    ${summariesLink}
    
    ${questionsLink}
    `;

  writeFileSync(
    `${courseDirPath}/../generated/topics/${topic.key}.md`,
    topicsReadmeContents
  );
}
