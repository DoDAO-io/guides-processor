import { GitGuideModel } from '../model/GitGuideModel';

export function validateUniqueUUIDs(guideJson: GitGuideModel) {
  const uuids: string[] = [guideJson.uuid];

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
}
