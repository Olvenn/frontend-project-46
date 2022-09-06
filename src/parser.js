// import { load } from 'js-yaml';
import yaml from 'js-yaml';

const getParsedFile = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
      return yaml.load(data);
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error('Unknown file fornmat.');
  }
};

export default getParsedFile;
