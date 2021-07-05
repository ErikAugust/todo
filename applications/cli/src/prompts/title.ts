import * as inquirer from 'inquirer';
import {Item} from '@eaj/todo';

export function titlePrompt(item: Item) {
    const questions = [
      {
        name: 'title',
        type: 'input',
        default: item.title,
        message: 'Enter title of item:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the title of item.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
}