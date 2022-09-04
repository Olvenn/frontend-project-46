#!/usr/bin/env node

import { Command } from 'commander';
import makeCompare from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  // Добавьте текущий форматер 'stylish' как форматер по умолчанию для библиотеки.
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(makeCompare(filepath1, filepath2, program.opts().format));
  });

program.parse(process.argv);
