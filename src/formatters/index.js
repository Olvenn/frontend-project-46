import getStylish from './stylish.js';

// Получаем файл сравнения проходя по всем детям дерева рекурсивно.
// Меняя элементы массива на соответствующие им строки
const makeStylishResult = (diffTree) => {
  const result = diffTree.map((nodes) => getStylish(nodes));
  return `{${result.join('')}\n}`;
};

const getResult = (data, typeFormat) => {
  switch (typeFormat) {
    case 'stylish':
      return makeStylishResult(data);
    default:
      throw new Error(`Unknown file type ${typeFormat}`);
  }
};

export default getResult;
