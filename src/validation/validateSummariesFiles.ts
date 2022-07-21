import fs from 'fs';
import { Validator } from 'jsonschema';
import { throwValidationError } from './throwValidationError';
import { readFilesSync } from '@utils/readFilesSync';
import YAML from 'yaml';
import summariesFileSchema from './schemas/summariesFileSchema.json';

export function validateSummariesFiles(summariesDirectory: string) {
  const summaryFiles = readFilesSync(summariesDirectory);
  summaryFiles.forEach(summaryFile => {
    const file = fs.readFileSync(summaryFile.filepath, 'utf8');
    const summariesJson = YAML.parse(file);
    const v = new Validator();
    const res = v.validate(summariesJson, summariesFileSchema);
    if (!res.valid) {
      throwValidationError(summaryFile.filepath, res.errors);
    }
  });
}
