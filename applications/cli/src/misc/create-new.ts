const fs = require('fs');
const { promisify } = require('util');
const writeFilePromise = promisify(fs.writeFile);

// Empty Todo list:
const todo = {
  list: [],
  archive: [],
  trash: [],
  config: {}
};

export async function checkIfFileExists(path: string) {
  if (fs.existsSync(path)) {
    return true;
  }
  return false;
}

/**
 * Creates both the 'Todo' JSON file and .env with path variable
 * @param {string} path 
 */
export async function createNewListFiles(path: string) {
  await writeFilePromise(path, JSON.stringify(todo));
  await writeFilePromise(`${process.cwd()}/.env`, `TODO_PATH=${path}`);
}