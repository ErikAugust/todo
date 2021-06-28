import * as inquirer from 'inquirer';

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
      }
    ];
    return inquirer.prompt(questions);
}