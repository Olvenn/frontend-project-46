import path from 'path';
import fs from 'fs';
import  { readFileSync }  from 'fs';
import _ from 'lodash';

const makeAbsolutePath = (filepath) => path.isAbsolute(filepath) ? filepath : path.resolve(process.cwd(), filepath);
const getFileData = (filepath) => {
    const file = readFileSync(makeAbsolutePath(filepath), 'utf-8');
    return JSON.parse(file);
}

const makeCompare = (file1, file2) => {
  //Получаем данные файлов
  const fileData1 = getFileData(file1);
  const fileData2 = getFileData(file2);
  //Получаем ключи объектов
  const keys1 = Object.keys(fileData1);
  const keys2 = Object.keys(fileData2);

  const keys = _.sortBy(_.union(keys1, keys2));

  const result = keys
    .map((key) => {
      if (fileData1[key] === fileData2[key]) {
        return `  ${key}: ${fileData1[key]}`;
      };
      if (!fileData1[key]) {
        return `  + ${key}: ${fileData2[key]}`;
      };
      if (!fileData2[key]) {
        return `  - ${key}: ${fileData1[key]}`;
      };
      if (fileData1[key] && fileData2[key] && fileData1[key] !== fileData2[key]) {
        return `  - ${key}: ${fileData1[key]}\n  + ${key}: ${fileData2[key]}`;
      };
  });


console.log('first file', getFileData(file1));
console.log('second file', getFileData(file2));

  return result.join('\n');
};

export default makeCompare;