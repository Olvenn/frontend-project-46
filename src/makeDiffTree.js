import _ from 'lodash';

const makeСhildren = (fileData1, fileData2) => {
  const keys1 = Object.keys(fileData1);
  const keys2 = Object.keys(fileData2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const tree = keys.map((key) => {
    const value1 = fileData1[key];
    const value2 = fileData2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: makeСhildren(value1, value2),
      };
    }
    if (!_.has(fileData1, key)) {
      return {
        key,
        type: 'added',
        addedValue: value2,
      };
    }
    if (!_.has(fileData2, key)) {
      return {
        key,
        type: 'removed',
        removedValue: value1,
      };
    }
    if (_.has(fileData1, key) && _.has(fileData2, key) && !_.isEqual(value1, value2)) {
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

const makeTree = (fileData1, fileData2) => ({ type: 'root', children: makeСhildren(fileData1, fileData2) });

export default makeTree;
