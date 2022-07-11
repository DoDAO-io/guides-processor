export interface QuestionChoice {
  content: string;
  key: string;
}

export interface Question {
  uuid: string;
  type: string;
  content: string;
  hint: string;
  explanation: string;
  answerKeys: string;
  sub_topics: string;
  difficulty_level: string;
  choices: QuestionChoice[];
}
