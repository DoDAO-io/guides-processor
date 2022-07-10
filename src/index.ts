import { Command } from 'commander';
import process from 'process';
import { validateQuestionFiles } from './validation/validateQuestionFiles';
import { validateCourseFile } from './validation/validateCourseFile';

const program = new Command();

export function validateFiles(srcPath: string) {
  const courseDirPath = process.cwd() + '/' + srcPath;
  console.log('Validating Course...');
  validateCourseFile(`${courseDirPath}/course.yaml`);
  validateQuestionFiles(`${courseDirPath}/questions`);
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
    console.log('str', path);
    validateFiles(path);
  });

program.parse();
