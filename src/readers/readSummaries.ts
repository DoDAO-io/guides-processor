import fs from 'fs';
import YAML from 'yaml';
import { Summary } from '../model/Summary';

export function readSummaries(
  courseDirPath: string,
  readingsFile: string
): Summary[] {
  const file = fs.readFileSync(
    `${courseDirPath}/summaries/${readingsFile}`,
    'utf8'
  );
  return YAML.parse(file) as Summary[];
}
