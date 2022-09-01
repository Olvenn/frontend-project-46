import { fileURLToPath } from 'url';
import path from 'path';
import { test, expect } from '@jest/globals';
import makeCompare from '../src/index.js';

const result = [
  '  + follow: undefined',
  '  host: hexlet.io',
  '  - proxy: 123.234.53.22',
  '  - timeout: 50\n  + timeout: 20',
  '  + verbose: true',
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const filePath1 = getFixturePath('file1.json');
const filePath2 = getFixturePath('file2.json');

test('check makeCompare with json files', () => {
  expect(makeCompare(filePath1, filePath2)).toEqual(result.join('\n'));
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});
