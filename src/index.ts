import pjson from '../package.json';
import { Command } from 'commander';

const program = new Command();

program
  .name('course-processor')
  .description('CLI to for generating metadata for DoDAO courses')
  .version(pjson.version);

program
  .command('gen-all')
  .description('Generates both the markdown and JSON metadata for the course')
  .argument('<path>', 'path of the course folder')
  .action(path => {
    console.log('str', path);
  });

program.parse();

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
