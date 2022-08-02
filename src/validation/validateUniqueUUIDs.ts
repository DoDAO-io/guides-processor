import fs from 'fs';
import YAML from 'yaml';
import { GitGuideModel } from '../model/GitGuideModel';
import { GuideToGenerate } from '../model/GuideToGenerate';

export function validateUniqueUUIDs(
  srcDirPath: string,
  guidesJson: GuideToGenerate[]
) {
  const uuids: string[] = [];

  guidesJson.forEach(guide => {
    const guideFilePath = `${srcDirPath}/${guide.path}`;
    const file = fs.readFileSync(guideFilePath, 'utf8');
    const guideJson = YAML.parse(file) as GitGuideModel;
    if (uuids.includes(guideJson.uuid)) {
      throw new Error(`Duplicate Guide UUID ${guideJson.uuid}`);
    } else {
      uuids.push(guideJson.uuid);
    }

    guideJson.steps.forEach(step => {
      if (uuids.includes(step.uuid)) {
        throw new Error(`Duplicate Step UUID ${step.uuid}`);
      } else {
        uuids.push(step.uuid);
      }

      step.stepItems.forEach(stepItem => {
        if (uuids.includes(stepItem.uuid)) {
          throw new Error(`Duplicate Step Item UUID ${stepItem.uuid}`);
        } else {
          uuids.push(stepItem.uuid);
        }
      });
    });
  });
}
