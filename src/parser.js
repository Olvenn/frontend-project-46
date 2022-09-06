import { load } from 'js-yaml';

const getParsedFile = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return load(data);
    case 'yml':
      return load(data);
    default:
      throw new Error('Unknown file fornmat.');
  }
};

export default getParsedFile;
