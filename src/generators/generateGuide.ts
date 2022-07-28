import dedent from 'dedent-js';
import fs from 'fs';
import {GuideToGenerate} from "../model/GuideToGenerate";
import {
  GuideModel,
  GuideQuestion,
  UserDiscordConnect,
  UserInput,
  isQuestion,
  QuestionChoice, isUserInput
} from "../model/GuideModel";
import YAML from 'yaml';
import {writeFileSync} from '../utils/writeFileSync';


const choicesMarkdown = (
  answerKeys: string[],
  choices: QuestionChoice[]
): string => {
  return choices
    .map(choice => {
      // prettier-ignore
      return dedent`- [${answerKeys.includes(choice.key) ? 'x' : ' '}]  ${choice.content}`;
    })
    .join('\n');
};

export function generateStepItem(stepItem: GuideQuestion | UserInput | UserDiscordConnect) {
  if(isQuestion(stepItem)) {
   const question = stepItem as GuideQuestion;
return dedent`


##### ${question.content}  
      
${choicesMarkdown(question.answerKeys, question.choices)}


`
  } else if(isUserInput(stepItem)) {

    const userInput = stepItem as UserInput
    return dedent`

| ${userInput.label}        | ${userInput.type}       |
| ----------- | ----------- |
`
  } else {
    return ''
  }

}

export function generateGuide(
  header: string,
  srcDirPath: string,
  guideToGenerate: GuideToGenerate
) {
  const file = fs.readFileSync(
    `${srcDirPath}/${guideToGenerate.path}`,
    'utf8'
  );
  const guideJson = YAML.parse(file) as GuideModel;

  const courseReadmeContents = dedent`${header}
---

## ${guideJson.name}

${guideJson.steps
.map(step => {
  return dedent`

## ${step.name}

${step.content}

${step.stepItems.map(stepItem => generateStepItem(stepItem))}    

`;
    })
    .join('\n\n---\n ')}
    
   
    `;

  writeFileSync(
    // prettier-ignore
    `${srcDirPath}/../generated/markdown/${guideToGenerate.key}.md`,
    courseReadmeContents
  );
}
