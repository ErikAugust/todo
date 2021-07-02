import * as inquirer from 'inquirer';

inquirer.registerPrompt('date', require('inquirer-date-prompt'));

export function duePrompt() {
    const questions = [
      {
        name: 'dueDate',
        type: 'date',
        message: 'Enter a due date for the item:',
        locale: 'en-US',
        clearable: true,
      }
    ];
    return inquirer.prompt(questions);
}