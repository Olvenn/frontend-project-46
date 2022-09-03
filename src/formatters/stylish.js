import _ from 'lodash';

const spacesCount = 2;
const getIndent = (currentDepth) => ' '.repeat(currentDepth * spacesCount);

const getStylish = (tree) => {
  const add = '+ ';
  const remove = '- ';

  const iter = (node, depth) => {
    if (!_.isObject(node)) {
      return { ...node };
    }

    const result = node.flatMap((element) => {
      switch (element.type) {
        case 'added':
          return `${getIndent(depth)}${add}${element.key}: ${element.addedValue}`;
        case 'removed':
          return `${getIndent(depth)}${remove}${element.key}: ${element.removedValue}`;
        case 'changed':
          return `${getIndent(depth)}${remove}${element.key}: ${element.removedValue}\n${getIndent(depth)}${add}${element.key}: ${element.addedValue}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${element.key}: ${element.unchangedValue}`;
        default:
          throw new Error(`Unknown file type ${element.type}`);
      }
    });
    return `\n${result.join('\n')}\n`;
  };
  return `${iter(tree, 1)}`;
};

export default getStylish;
