import { Command } from 'commander';
import process from 'process';
import { generateCourseFiles } from './generators/generateCourseFiles';
import { validateGuide } from './validation/validateGuide';
import { validateUniqueUUIDs } from './validation/validateUniqueUUIDs';

const program = new Command();

export function validateFilesAndGenerateFiles(srcPath: string) {
  const courseDirPath = process.cwd() + '/' + srcPath;
  console.log('Validating Course...');
  validateGuide(`${courseDirPath}/course.yaml`);
  validateUniqueUUIDs(
    `${courseDirPath}/summaries`,
    `${courseDirPath}/readings`,
    `${courseDirPath}/questions`
  );
  console.log('Congrats! Everything looks good!');

  generateCourseFiles(courseDirPath);
}

export function validateFiles(srcPath: string) {
  const courseDirPath = process.cwd() + '/' + srcPath;
  console.log('Validating Course...');
  validateGuide(`${courseDirPath}/course.yaml`);
  validateUniqueUUIDs(
    `${courseDirPath}/summaries`,
    `${courseDirPath}/readings`,
    `${courseDirPath}/questions`
  );
  console.log('Congrats! Everything looks good!');
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
    validateFilesAndGenerateFiles(path);
  });

program
  .command('validate')
  .description('Validates the course files')
  .argument('<path>', 'path of the course folder')
  .action(async path => {
    validateFiles(path);
  });

program.parse();
