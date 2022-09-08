import _ from 'lodash';

const getIndent = (currentDepth, spacesCount = 4) => ' '.repeat(currentDepth * spacesCount - 2);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return `${value}`;
  }

  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const nodeValue = value[key];
    return `${getIndent(depth)}  ${key}: ${stringify(nodeValue, depth + 1)}\n`;
  });
  return `{\n${result.join('')}${getIndent(depth - 1)}  }`;
};

const getStylish = (tree) => {
  const add = '+ ';
  const remove = '- ';

  const iter = (node, depth) => {
    switch (node.type) {
      case 'root':
        return `{${node.children.map((child) => iter(child, 1)).join('')}\n}`;
      case 'nested':
        return `\n  ${getIndent(depth)}${node.key}: {${node.children.map((child) => iter(child, depth + 1)).join('')}\n${getIndent(depth)}  }`;
      case 'added':
        return `\n${getIndent(depth)}${add}${node.key}: ${stringify(node.addedValue, depth + 1)}`;
      case 'removed':
        return `\n${getIndent(depth)}${remove}${node.key}: ${stringify(node.removedValue, depth + 1)}`;
      case 'changed':
        return `\n${getIndent(depth)}${remove}${node.key}: ${stringify(node.removedValue, depth + 1)}\n${getIndent(depth)}${add}${node.key}: ${stringify(node.addedValue, depth + 1)}`;
      default:
        return `\n${getIndent(depth)}  ${node.key}: ${stringify(node.unchangedValue, depth + 1)}`;
    }
  };
  return `${iter(tree, 1)}`;
};
const makeStylishResult = (diffTree) => {
  const result = getStylish(diffTree);
  return result;
};

export default makeStylishResult;
