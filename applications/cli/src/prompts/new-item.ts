import * as inquirer from 'inquirer';

inquirer.registerPrompt('date', require('inquirer-date-prompt'));

export function newItemPrompt() {
    const questions = [
      {
        name: 'title',
        type: 'input',
        message: 'Enter title of item:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the title of item.';
          }
        }
      },
      {
        name: 'intention',
        type: 'input',
        message: 'Enter the intention of the item:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the intention of the item.';
          }
        }
      },
      {
        name: 'action',
        type: 'input',
        message: 'Enter the next action to be taken:',
      },
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