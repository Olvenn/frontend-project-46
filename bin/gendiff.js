#!/usr/bin/env node

import { Command } from 'commander';
import getCompare from '../src/index.js';

const program = new Command();

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, pilepath2) => {
      getCompare(filepath1, pilepath2);
    });

program.parse();
