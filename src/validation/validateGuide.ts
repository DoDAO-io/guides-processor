import fs from 'fs';
import { throwValidationError } from './throwValidationError';
import YAML from 'yaml';
import { Validator } from 'jsonschema';
import guideFileSchema from './schemas/guideSchema.json';
import guideIntegrationsSchema from './schemas/guideIntegrationsSchema.json';
import guideStepSchema from './schemas/guideStepSchema.json';

export function validateGuide(guideFilePath: string) {
  const file = fs.readFileSync(guideFilePath, 'utf8');
  const guideJson = YAML.parse(file);
  const v = new Validator();
  v.addSchema(guideIntegrationsSchema, '/GuideIntegrationsSchema');
  v.addSchema(guideStepSchema, '/GuideStepSchema');

  const res = v.validate(guideJson, guideFileSchema);
  if (!res.valid) {
    throwValidationError(guideFilePath, res.errors);
  }
}
