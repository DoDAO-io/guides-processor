import fs from 'fs';
import { Validator } from 'jsonschema';
import { throwValidationError } from './throwValidationError';
import { readFilesSync } from '@utils/readFilesSync';
import YAML from 'yaml';
import questionsFileSchema from './schemas/questionsSchema.json';

export function validateQuestionFiles(questionDirectory: string) {
  const questionFiles = readFilesSync(questionDirectory);
  questionFiles.forEach(questionFile => {
    const file = fs.readFileSync(questionFile.filepath, 'utf8');
    const questionsJson = YAML.parse(file);
    const v = new Validator();
    const res = v.validate(questionsJson, questionsFileSchema);
    if (!res.valid) {
      throwValidationError(questionFile.filepath, res.errors);
    }
  });
}
