import path from 'path';
import  { readFileSync }  from 'fs';

const makeAbsolutePath = (filepath) => path.isAbsolute(filepath) ? filepath : path.resolve(filepath);

const getFileData = (filepath) => {
    const file = readFileSync(makeAbsolutePath, 'utf-8');
    return JSON.parse(file);
}

const makeCompare = (file1, file2) => {
  console.log(getFileData(filepath1));
  console.log(getFileData(filepath2));
};

export default makeCompare;