export enum QuestionType {
  SingleChoice = 'SingleChoice',
  MultipleChoice = 'MultipleChoice'
}

export enum InputType {
  PublicShortInput = 'PublicShortInput',
  PrivateShortInput = 'PrivateShortInput'
}

// These don't follow the naming convention as we used the type in url
export enum GuideType {
  Course = 'course',
  Onboarding = 'onboarding',
  HowTo = 'how-to',
  LevelUp = 'level-up'
}

export enum GuidePublishStatus {
  Live = 'Live',
  Draft = 'Draft'
}

export const GuideTypesArray = [GuideType.Course, GuideType.Onboarding, GuideType.HowTo, GuideType.LevelUp];

export const UserDiscordConnectType = 'UserDiscordConnect';

export interface GuideStepItem {
  // This is undefined for the old questions. The questions will have to be migrated
  type: InputType | QuestionType | typeof UserDiscordConnectType;
  order: number;
  uuid: string;
}

export interface QuestionChoice {
  content: string;
  key: string;
  order: number;
}

export interface GuideQuestion extends GuideStepItem {
  answerKeys: string[];
  choices: QuestionChoice[];
  content: string;
  questionType: QuestionType;
}

export interface UserInput extends GuideStepItem {
  label: string;
  required: boolean;
}

export type UserDiscordConnect = GuideStepItem;

export interface GuideStep {
  content: string;
  name: string;
  order: number;
  stepItems: (GuideQuestion | UserInput | UserDiscordConnect)[];
  uuid: string;
}

export interface GuideIntegrations {
  discordRoleIds: string[];
  // number of answers that should be correct in order to get discord score
  discordRolePassingCount?: number;
  discordWebhook?: string;
  projectGalaxyCredentialId?: string;
  projectGalaxyOatMintUrl?: string;
  projectGalaxyOatPassingCount?: number;
}

export interface GuideModel {
  categories: string[];
  content: string;
  created: string;
  guideIntegrations?: GuideIntegrations;
  guideType: GuideType;
  name: string;
  postSubmissionStepContent?: string;
  publishStatus: GuidePublishStatus;
  showIncorrectOnCompletion: boolean;
  socialShareImage?: string;
  steps: GuideStep[];
  thumbnail: string;
  uuid: string;
}


export const isQuestion = (item: { type: string }) =>
  item.type === QuestionType.MultipleChoice || item.type === QuestionType.SingleChoice;

export const isUserInput = (item: { type: string }) =>
  item.type === InputType.PublicShortInput || item.type === InputType.PrivateShortInput;

export const isUserDiscordConnect = (item: { type: string }) => item.type === UserDiscordConnectType;
