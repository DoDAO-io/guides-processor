import {Command} from 'commander';
import process from 'process';
import {generateCourseFiles} from './generators/generateCourseFiles';
import {validateCourseFile} from './validation/validateCourseFile';
import {validateQuestionFiles} from './validation/validateQuestionFiles';
import {validateReadingsFiles} from './validation/validateReadingsFiles';
import {validateSummariesFiles} from './validation/validateSummariesFiles';
import {validateUniqueUUIDs} from './validation/validateUniqueUUIDs';

const program = new Command();

export function validateFiles(srcPath: string) {
  const courseDirPath = process.cwd() + '/' + srcPath;
  console.log('Validating Course...');
  validateCourseFile(`${courseDirPath}/course.yaml`);
  validateSummariesFiles(`${courseDirPath}/summaries`);
  validateQuestionFiles(`${courseDirPath}/questions`);
  validateReadingsFiles(`${courseDirPath}/readings`);
  validateUniqueUUIDs(
    `${courseDirPath}/summaries`,
    `${courseDirPath}/readings`,
    `${courseDirPath}/questions`
  );
  console.log('Congrats! Everything looks good!');

  generateCourseFiles(courseDirPath);
}

program
  .name('course-processor')
  .description('CLI to for generating metadata for DoDAO courses')
  .version('0.0.1');

program
  .command('gen-all')
  .description('Generates both the markdown and JSON metadata for the course')
  .argument('<path>', 'path of the course folder')
  .action(async path => {
    validateFiles(path);
  });

program.parse();
