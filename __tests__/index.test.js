import { fileURLToPath } from 'url';
import { dirname, path } from 'path';
import { test, expect } from '@jest/globals';
import makeCompare from '../src/index.js';

const result = [
  '- follow: false',
  '  host: hexlet.io',
  '- proxy: 123.234.53.22',
  '- timeout: 50',
  '+ timeout: 20',
  '+ verbose: true',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('check makeCompare with json files', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});
