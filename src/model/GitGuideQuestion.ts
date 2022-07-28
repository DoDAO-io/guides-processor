import { GitGuideStepItem } from './GitGuideStepItem';
import { QuestionType } from './StepItemType';

export interface GitQuestionChoice {
  content: string;
  key: string;
}

export interface GitGuideQuestion extends GitGuideStepItem {
  answerKeys: string[];
  choices: GitQuestionChoice[];
  content: string;
  questionType: QuestionType;
}
