import path from 'path';
import { readFileSync } from 'fs';
import _ from 'lodash';
import getParsedFile from './parser.js';

import makeTree from './makeDiffTree.js';
import getStylish from './formatters/stylish.js';

const makePath = (filepath) => {
  const makeAbsolutePath = (relativePath) => path.resolve(process.cwd(), relativePath);
  return path.isAbsolute(filepath) ? filepath : makeAbsolutePath(filepath);
};

const getFileData = (filepath) => {
  const file = readFileSync(makePath(filepath), 'utf-8');
  return file;
};

const makeCompare = (filepath1, filepath2) => {
  // Получаем данные файлов и проверяем является ли разбираемая строка правильным JSON или jml
  const fileData1 = getParsedFile(getFileData(filepath1), filepath1);
  const fileData2 = getParsedFile(getFileData(filepath2), filepath2);

  // Создаем дерево (массив) объектов для нахождение различий в файлах,
  // в т.ч. имеющих вложенные структуры.
  const tree = makeTree(fileData1, fileData2);

  // Получаем файл сравнения проходя по всем детям дерева рекурсивно.
  // Меняя элементы массива на соответствующие им строки
  const getResult = (diffTree) => {
    const result = diffTree.map((nodes) => getStylish(nodes));
    return `{${result.join('')}\n}`;
  };

  return getResult(tree);
};

export default makeCompare;
