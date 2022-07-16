import dedent from 'dedent-js';
import fs from 'fs';
import YAML from 'yaml';
import { Summary } from '../model/Summary';
import { writeFileSync } from '../utils/writeFileSync';

export function generateSummaries(
  courseDirPath: string,
  topic: string,
  readingsFile: string
) {
  const file = fs.readFileSync(
    `${courseDirPath}/summaries/${readingsFile}`,
    'utf8'
  );
  const summariesJson = YAML.parse(file) as Summary[];
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');

  const courseReadmeContents = dedent`${header}
    ---
    
    ## ${topic}
    
    ${summariesJson
      .map(summary => {
        return dedent`
        **${summary.title}**        
        ${summary.details} 
      `;
      })
      .join('\n ')}
    
   
    `;

  writeFileSync(
    // prettier-ignore
    `${courseDirPath}/../generated/summaries/${readingsFile.replace('.yaml', '')}.md`,
    courseReadmeContents
  );
}
