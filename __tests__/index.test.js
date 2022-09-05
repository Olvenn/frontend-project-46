import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import makeCompare from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const resultNested = readFile('stylishResult.txt');

const testCases = [
  ['file1.json', 'file2.json', 'stylishResult.txt', 'stylish'],
  ['file1.yml', 'file2.yml', 'stylishResult.txt', 'stylish'],
  ['file1.json', 'file2.json', 'plainResult.txt', 'plain'],
  ['file1.yml', 'file2.yml', 'plainResult.txt', 'plain'],
  ['file1.json', 'file2.json', 'jsonResult.txt', 'json'],
  ['file1.yml', 'file2.yml', 'jsonResult.txt', 'json'],
];

test('If the format is not specified, get result with formater stylish.', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  expect(makeCompare(filePath1, filePath2)).toEqual(resultNested);
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});

test.each(testCases)('Check the program in all possible file ormats', (file1, file2, resultFile, formatter) => {
  const result1 = readFile(resultFile);
  const filePath1 = getFixturePath(file1);
  const filePath2 = getFixturePath(file2);
  expect(makeCompare(filePath1, filePath2, formatter)).toEqual(result1);
});
