import dedent from 'dedent-js';
import fs from 'fs';
import {GuideToGenerate} from "../model/GuideToGenerate";
import {generateGuide} from "./generateGuide";
import YAML from 'yaml';
import {writeFileSync} from '../utils/writeFileSync';

function generateGuidesTable(
  header: string,
  srcDirPath: string,
  guidesToGenerate: GuideToGenerate[]
) {

  guidesToGenerate.forEach(
    guide => generateGuide(header, srcDirPath, guide)
  )

  return guidesToGenerate
    .map((guide, index) => {
      const fileLink = `[Link](generated/markdown/${guide.key}.md)`;
      return `| ${index + 1}      | ${guide.key} |  ${fileLink} |`
    })
    .join('\n ');

}

function generateGuides(
  header: string,
  srcDirPath: string,
  guidesToGenerate: GuideToGenerate[]
) {
  // prettier-ignore
  const courseReadmeContents =
    dedent`${header}
---

## Guides

| S.No        | Title       |  Link  |
| ----------- | ----------- |----------- |
${(generateGuidesTable(header, srcDirPath, guidesToGenerate))} 
`;

  writeFileSync(`${srcDirPath}/../README.md`, courseReadmeContents);
}

function createDirectoriesIfNotExists(courseDirPath: string) {
  const generatedFolder = `${courseDirPath}/../generated`;
  const markdown = `${courseDirPath}/../generated/markdown`;
  const json = `${courseDirPath}/../generated/json`;

  const foldersToGenerate = [
    generatedFolder,
    markdown,
    json
  ];

  foldersToGenerate.forEach(folder => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  });
}

export function generateGuideFiles(srcDirPath: string) {
  const guidesFile = fs.readFileSync(`${srcDirPath}/guides.yaml`, 'utf8');
  const header = fs.readFileSync(`${srcDirPath}/guides-header.md`, 'utf8');

  createDirectoriesIfNotExists(srcDirPath);

  const guidesToGenerate = (YAML.parse(guidesFile).guides) as GuideToGenerate[];
  generateGuides(header, srcDirPath, guidesToGenerate);

}
