import getStylish from './stylish.js';
import getPlain from './plain.js';

// Получаем файл сравнения проходя по всем детям дерева рекурсивно.
// Меняя элементы массива на соответствующие им строки
const makeStylishResult = (diffTree) => {
  const result = diffTree.map((nodes) => getStylish(nodes));
  return `{${result.join('')}\n}`;
};

// Меняя элементы массива на соответствующие им выражение
const makePlainResult = (diffTree) => {
  const result = diffTree.map((nodes) => getPlain(nodes));
  return `${result.join('').trim()}`;
};

// Вывод в структурированном формате json
const makeJsonResult = (diffTree) => JSON.stringify(diffTree);

const getResult = (data, typeFormat) => {
  switch (typeFormat) {
    case 'stylish':
      return makeStylishResult(data);
    case 'plain':
      return makePlainResult(data);
    case 'json':
      return makeJsonResult(data);
    default:
      throw new Error('Unknown file type.');
  }
};

export default getResult;
