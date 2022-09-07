import makeStylishResult from './stylish.js';
import makePlainResult from './plain.js';

const makeJsonResult = (diffTree) => JSON.stringify(diffTree);

const mapping = {
  stylish: makeStylishResult,
  plain: makePlainResult,
  json: makeJsonResult,
};

const getResult = (type) => {
  if (!(type in mapping)) {
    throw new Error('Unknown file fornmat.');
  }
  return mapping[type];
};

export default getResult;
