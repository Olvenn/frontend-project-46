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

// import makeStylishResult from './stylish.js';
// import makePlainResult from './plain.js';

// const makeJsonResult = (diffTree) => JSON.stringify(diffTree);

// const getResult = (data, typeFormat) => {
//   switch (typeFormat) {
//     case 'stylish':
//       return makeStylishResult(data);
//     case 'plain':
//       return makePlainResult(data);
//     case 'json':
//       return makeJsonResult(data);
//     default:
//       throw new Error('Unknown file type.');
//   }
// };

// export default getResult;

