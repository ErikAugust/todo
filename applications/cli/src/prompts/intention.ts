import * as inquirer from 'inquirer';
import {Item} from '@eaj/todo';

export function intentionPrompt(item: Item) {
    const questions = [
      {
        name: 'intention',
        type: 'input',
        default: item.intention,
        message: 'Enter intention of item:',
        validate: function( value: any ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter the intention of item.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
}