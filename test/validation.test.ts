import { validateCourseFile } from '../src/validation/validateCourseFile';

describe('validate course', () => {
  it('should pass for the course file', () => {
    validateCourseFile(__dirname + '/dummy-course/src/course.yaml');
  });
});
