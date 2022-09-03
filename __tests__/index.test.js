import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import makeCompare from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const resultPlain = readFile('resultJson.txt');
const resultNested = readFile('expected.txt');

test('check makeCompare with json files', () => {
  const filePath1 = getFixturePath('file-plain1.json');
  const filePath2 = getFixturePath('file-plain2.json');
  expect(makeCompare(filePath1, filePath2)).toEqual(resultPlain);
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});

test('check makeCompare with yml files', () => {
  const filePath1 = getFixturePath('file-plain1.yml');
  const filePath2 = getFixturePath('file-plain2.yml');
  expect(makeCompare(filePath1, filePath2)).toEqual(resultPlain);
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});

test('check makeCompare with json files', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  expect(makeCompare(filePath1, filePath2)).toEqual(resultNested);
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});

test('check makeCompare with yml files', () => {
  const filePath1 = getFixturePath('file1.yml');
  const filePath2 = getFixturePath('file2.yml');
  expect(makeCompare(filePath1, filePath2)).toEqual(resultNested);
  expect(typeof makeCompare(filePath1, filePath2)).toBe('string');
});
