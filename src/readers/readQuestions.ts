import fs from 'fs';
import YAML from 'yaml';
import { Question } from '@model/Question';

export function readQuestions(
  courseDirPath: string,
  questionsFile: string
): Question[] {
  const file = fs.readFileSync(
    `${courseDirPath}/questions/${questionsFile}`,
    'utf8'
  );
  return YAML.parse(file) as Question[];
}
