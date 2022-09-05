## Сalculator files data difference 

The program is designed to generate differences between data from two files.

The program has a command-line interface (CLI).

The program reads the contents of two files; checks the data using a parser;
finds differences for files with nested structures by making a tree of differences; Based on the resulting tree, it generates a text that outputs to the console.

# Supports file formats: json, yaml.

# Supports options for stule of the result: stylish, plain and json.

## Installation:

NodeJS version: not lower 14.

1. Cloning the repository:
   git clone https://github.com/Olvenn/frontend-project-46.git
2. Installing dependencies in the project folder:
   npm install
3. Installing the project:
   npm link
4. To run:  gendiff [-f option] <path to file1> <path to file2>.

# For help run gendiff -h or gendiff --help.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Olvenn/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Olvenn/frontend-project-46/actions)
[![Node.js CI](https://github.com/Olvenn/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/Olvenn/frontend-project-46/actions/workflows/node.js.yml)
<a href="https://codeclimate.com/github/Olvenn/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/a0bbb4ffa8cfdec76566/maintainability" /></a>
<a href="https://codeclimate.com/github/Olvenn/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a0bbb4ffa8cfdec76566/test_coverage" /></a>

[![Maintainability](https://api.codeclimate.com/v1/badges/a0bbb4ffa8cfdec76566/maintainability)](https://codeclimate.com/github/Olvenn/frontend-project-46/maintainability)

## Demonstrations

### Example for merging two json files:
[![asciicast](https://asciinema.org/a/pUJnssSI0xL8aMgqrWTTWIKeY.png)](https://asciinema.org/a/pUJnssSI0xL8aMgqrWTTWIKeY)

### Example for merging two json files and two yml files:
[![asciicast](https://asciinema.org/a/BKPXzHQhvhjUf9aVydkmeeEfZ.png)](https://asciinema.org/a/BKPXzHQhvhjUf9aVydkmeeEfZ)

### Example for merging two json nested files files:
[![asciicast](https://asciinema.org/a/qsd0UsxVj0UIF3mpErZOPdB4Y.png)](https://asciinema.org/a/qsd0UsxVj0UIF3mpErZOPdB4Y)

### Example for merging two json files files with plain and stylish format:
[![asciicast](https://asciinema.org/a/uppiq80XWSsr7aPQ2rEmNG3o3.png)](https://asciinema.org/a/uppiq80XWSsr7aPQ2rEmNG3o3)