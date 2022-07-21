import dedent from 'dedent-js';
import fs from 'fs';
import YAML from 'yaml';
import { Reading } from '@model/Reading';
import { writeFileSync } from '@utils/writeFileSync';

export function generateReadings(
  courseDirPath: string,
  topic: string,
  readingsFile: string
) {
  const file = fs.readFileSync(
    `${courseDirPath}/readings/${readingsFile}`,
    'utf8'
  );
  const readingsJson = YAML.parse(file) as Reading[];
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');

  const courseReadmeContents = dedent`${header}
    ---
    
    ## ${topic}
    
    ${readingsJson
      .map(reading => {
        const paramString = reading.url.split('?')[1];
        const videoId = new URLSearchParams(paramString).get('v');
        return dedent`
        **${reading.title}**
        
        [![${
          reading.title
        }](https://img.youtube.com/vi/${videoId}/0.jpg)](https://www.youtube.com/watch?v=${videoId})     
        
        ${reading.details}    
        
        Sub Topics: ${reading.subTopics.join(', ')}    
      `;
      })
      .join('\n ')}
    
   
    `;

  writeFileSync(
    // prettier-ignore
    `${courseDirPath}/../generated/readings/${readingsFile.replace('.yaml', '')}.md`,
    courseReadmeContents
  );
}
