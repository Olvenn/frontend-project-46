import makeStylishResult from './stylish.js';
import makePlainResult from './plain.js';

const makeJsonResult = (diffTree) => JSON.stringify(diffTree);

const getResult = (data, typeFormat) => {
  switch (typeFormat) {
    case 'stylish':
      return makeStylishResult(data);
    case 'plain':
      return makePlainResult(data);
    case 'json':
      return makeJsonResult(data);
    default:
      throw new Error('Unknown file type.');
  }
};

export default getResult;
