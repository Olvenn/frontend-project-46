import yaml from 'js-yaml';

const mapping = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const getParser = (type) => {
  if (!(type in mapping)) {
    throw new Error('Unknown file fornmat.');
  }
  return mapping[type];
};

export default getParser;
