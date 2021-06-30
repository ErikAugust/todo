import * as inquirer from 'inquirer';

export async function emptyTrashPrompt(): Promise<any> {
  return await inquirer.prompt([{
    type: 'confirm',
    name: 'empty',
    message: 'Are you sure you want to empty the trash?',
  }]);
}