import path from 'path';
import { readFileSync } from 'fs';
import getParsedFile from './parser.js';

import makeTree from './makeDiffTree.js';

import getResult from './formatters/index.js';

const makePath = (filepath) => {
  const makeAbsolutePath = (relativePath) => path.resolve(process.cwd(), relativePath);
  return path.isAbsolute(filepath) ? filepath : makeAbsolutePath(filepath);
};

const getFileData = (filepath) => readFileSync(makePath(filepath), 'utf-8');

const makeCompare = (filepath1, filepath2, typeFormat) => {
  const fileData1 = getParsedFile(getFileData(filepath1), filepath1);
  const fileData2 = getParsedFile(getFileData(filepath2), filepath2);
  const tree = makeTree(fileData1, fileData2);

  return getResult(tree, typeFormat);
};

export default makeCompare;
