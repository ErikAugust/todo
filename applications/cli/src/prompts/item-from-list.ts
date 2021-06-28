import {Item} from '@eaj/todo';
import {Moment} from 'moment';
import moment from 'moment';
import chalk from 'chalk';
import * as inquirer from 'inquirer';

export function getDueDateLabel(dueDate: Moment): string {
    // TODO: Switch color - red - yellow - based on the due date in past/future
    // https://momentjs.com/docs/#/displaying/difference/

    return `(${chalk.bold.red(dueDate.calendar())})`;
  }

export async function itemFromListPrompt(items: Array<Item>): Promise<number> {
    const prompt = await inquirer.prompt([
      {
        type: 'list',
        message: 'Select item to view details',
        name: 'items',
        choices: items.map((item, index)=> {
          const label = item.dueDate ? `${item.title} ${getDueDateLabel(item.dueDate)}` : item.title;
          return { name: label, value: index }
        })
      }
    ]);
    return prompt.items;
  }