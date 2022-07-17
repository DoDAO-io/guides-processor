import fs from 'fs';
import YAML from 'yaml';
import {Reading} from '../model/Reading';

export function readReadings(
  courseDirPath: string,
  readingsFile: string
): Reading[] {
  const file = fs.readFileSync(
    `${courseDirPath}/readings/${readingsFile}`,
    'utf8'
  );
  return YAML.parse(file) as Reading[]
}
