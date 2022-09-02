import { load } from 'js-yaml';
import path from 'path';

const getParsedFile = (data, filepath) => {
  const getExtension = (pathToFile) => path.extname(pathToFile).slice(1);

  switch (getExtension(filepath)) {
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
