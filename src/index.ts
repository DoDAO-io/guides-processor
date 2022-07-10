import { validateCourseFile } from './validation/validateCourseFile';
import { Command } from 'commander';

const program = new Command();

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export function validateFiles(srcPath: string) {
  const courseDirPath = process.cwd() + '/' + srcPath;
  validateCourseFile(`${courseDirPath}/course.yaml`);
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
