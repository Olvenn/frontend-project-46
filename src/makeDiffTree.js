import _ from 'lodash';

const makeTree = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const tree = keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: makeTree(value1, value2),
      };
    }
    if (!_.has(file1, key)) {
      return {
        key,
        type: 'added',
        addedValue: value2,
      };
    }
    if (!_.has(file2, key)) {
      return {
        key,
        type: 'removed',
        removedValue: value1,
      };
    }
    if (_.has(file1, key) && _.has(file2, key) && (value1 !== value2)) {
      return {
        key,
        type: 'changed',
        removedValue: value1,
        addedValue: value2,
      };
    }
    return {
      key,
      type: 'unchanged',
      unchangedValue: value1,
    };
  });
  return tree;
};

export default makeTree;
