import _ from 'lodash';

const spacesCount = 4;
const getIndent = (currentDepth) => ' '.repeat(currentDepth * spacesCount - 2);

const stringify = (value, depth) => {
  // Получаем значение если не объект
  if (!_.isPlainObject(value)) {
    return `${value}`;
  }

  const keys = Object.keys(value);
  // Если объект рекурсивно перебираем и переводим в строку
  const result = keys.map((key) => {
    const childValue = value[key];
    return `${getIndent(depth)}  ${key}: ${stringify(childValue, depth + 1)}\n`;
  });
  return `{\n${result.join('')}${getIndent(depth - 1)}  }`;
};

const getStylish = (tree) => {
  const add = '+ ';
  const remove = '- ';

  const iter = (node, depth) => {
    switch (node.type) {
      case 'nested':
        // Рекурсивно обходим детей
        return `\n  ${getIndent(depth)}${node.key}: {${node.children.map((child) => iter(child, depth + 1)).join('')}\n${getIndent(depth)}  }`;
      case 'added':
        return `\n${getIndent(depth)}${add}${node.key}: ${stringify(node.addedValue, depth + 1)}`;
      case 'removed':
        return `\n${getIndent(depth)}${remove}${node.key}: ${stringify(node.removedValue, depth + 1)}`;
      case 'changed':
        return `\n${getIndent(depth)}${remove}${node.key}: ${stringify(node.removedValue, depth + 1)}\n${getIndent(depth)}${add}${node.key}: ${stringify(node.addedValue, depth + 1)}`;
      case 'unchanged':
        return `\n${getIndent(depth)}  ${node.key}: ${stringify(node.unchangedValue, depth + 1)}`;
      default:
        throw new Error(`Unknown file type ${node.type}`);
    }
  };
  return `${iter(tree, 1)}`;
};

export default getStylish;
