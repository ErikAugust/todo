import * as inquirer from 'inquirer';

export function newNotePrompt() {
    const questions = [
      {
        name: 'note',
        type: 'input',
        message: 'Enter the text of your note:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the text of your note.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
}