import * as inquirer from 'inquirer';

export async function createNewFilePrompt(): Promise<any> {
    return await inquirer.prompt([{
      type: 'input',
      name: 'newFile',
      message: 'Create new list file',
      default: `${process.cwd()}/todo.json`
    }]);
  }