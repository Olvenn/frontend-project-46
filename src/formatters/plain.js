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
      case 'nested':
        return node.children.map((child) => iter(child, `${keysPath}.`)).join('');
      case 'added':
        return `Property '${keysPath}' was ${node.type} with value: ${stringify(node.addedValue)}\n`;
      case 'removed':
        return `Property '${keysPath}' was ${node.type}\n`;
        // return `Property '${keysPath}' was ${node.removedValue}\n`;
      case 'changed':
        return `Property '${keysPath}' was updated. From ${stringify(node.removedValue)} to ${stringify(node.addedValue)}\n`;
      case 'unchanged':
        return `Property '${keysPath}' was not changed\n`;
      default:
        throw new Error(`Unknown file type ${node.type}`);
    }
  };
  return `${iter(tree)}`;
};

export default getPlain;
