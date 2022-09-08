import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }

  return typeof value === 'string' ? `'${value}'` : value;
};

const getPlain = (tree) => {
  const iter = (node, name = '') => {
    const keysPath = `${name}${node.key}`;
    switch (node.type) {
      case 'root':
        return `${node.children.map((child) => iter(child, '')).join('').trim()}`;
      case 'nested':
        return node.children.map((child) => iter(child, `${keysPath}.`)).join('');
      case 'added':
        return `Property '${keysPath}' was ${node.type} with value: ${stringify(node.addedValue)}\n`;
      case 'removed':
        return `Property '${keysPath}' was ${node.type}\n`;
      case 'changed':
        return `Property '${keysPath}' was updated. From ${stringify(node.removedValue)} to ${stringify(node.addedValue)}\n`;
      case 'unchanged':
        return '';
      default:
        throw new Error(`Unknown file type ${node.type}`);
    }
  };
  return `${iter(tree)}`;
};

const makePlainResult = (diffTree) => {
  const result = getPlain(diffTree);
  return result;
};

export default makePlainResult;
