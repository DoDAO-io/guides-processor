import fs from 'fs';
import { throwValidationError } from './throwValidationError';
import YAML from 'yaml';
import { Validator } from 'jsonschema';
import courseFileSchema from './schemas/courseFileSchema.json';

export function validateCourseFile(courseFilePath: string) {
  const file = fs.readFileSync(courseFilePath, 'utf8');
  const courseJson = YAML.parse(file);
  const v = new Validator();
  const res = v.validate(courseJson, courseFileSchema);
  if (!res.valid) {
    throwValidationError(courseFilePath, res.errors);
  }
}
