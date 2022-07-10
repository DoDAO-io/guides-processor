import fs from 'fs';
import YAML from 'yaml';
import { Validator } from 'jsonschema';
import courseFileSchema from './schemas/courseFileSchema.json';

export function validateCourseFile(courseFilePath: string) {
  const file = fs.readFileSync(courseFilePath, 'utf8');
  const courseJson = YAML.parse(file);
  const v = new Validator();
  const res = v.validate(courseJson, courseFileSchema);
  console.log('res.valid', res.valid);
  if (!res.valid) {
    throw new Error(JSON.stringify(res.errors, null, 2));
  }

  console.log(JSON.stringify(courseJson, null, 2));
}
