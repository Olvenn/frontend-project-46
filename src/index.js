import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';

const makePath = (filepath) => {
  const makeAbsolutePath = (relativePath) => path.resolve(process.cwd(), relativePath);
  return path.isAbsolute(filepath) ? filepath : makeAbsolutePath(filepath);
};

const getFileData = (filepath) => {
  const file = readFileSync(makePath(filepath), 'utf-8');
  return JSON.parse(file);
};

const makeCompare = (file1, file2) => {
  // Получаем данные файлов
  const fileData1 = getFileData(file1);
  const fileData2 = getFileData(file2);
  // Получаем ключи объектов
  const keys1 = Object.keys(fileData1);
  const keys2 = Object.keys(fileData2);

  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys
    .map((key) => {
      if (fileData1[key] === fileData2[key]) {
        return `    ${key}: ${fileData1[key]}`;
      }
      if (!_.has(fileData1, key)) {
        return `  + ${key}: ${fileData2[key]}`;
      }
      if (!fileData2[key]) {
        return `  - ${key}: ${fileData1[key]}`;
      }

      return `  - ${key}: ${fileData1[key]}\n  + ${key}: ${fileData2[key]}`;
    });

  // console.log(getFileData(file1));
  // console.log(getFileData(file2));

  return `{\n${result.join('\n')}\n}`;
};

export default makeCompare;
