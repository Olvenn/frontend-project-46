import _ from 'lodash';

import _ from 'lodash';

const makeTree = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keys = _.sortBy(_.union(keys1, keys2));

  keys.map((key) => {
  const value1 = fileData1[key];
  const value2 = fileData2[key];

  if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
    return {
      key,
      type: 'neste',
      children: makeTree(value1, value2),
    };
  }
  if (!_.has(file1, key)) {
    return {
      key,
      type: 'add',
      addedValue: value2,
    };
  }
  if (!_.has(file2, key)) {
    return {
      key,
      type: 'remove',
      removedValue: value1,
    };
  }
  if (_.has(file1, key) && _.has(file2, key) && (value1 !== value2)) {
    return {
      key,
      type: 'change',
      removedValue: value1,
      addedValue: value2,
    };
  }
  return {
    key,
    type: 'unchange',
    unchangedValue: value1,
  };
  });
}


  