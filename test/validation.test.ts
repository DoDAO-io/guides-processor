import { validateGuide } from './../src/validation/validateGuide';

describe('validate course', () => {
  it('should pass for the course file', () => {
    validateGuide(__dirname + '/dummy-guides/src/course-contributor.yaml');
  });
});
