import { Item } from '@eaj/todo';

const Table = require('cli-table');
const chalk = require('chalk');

export function getListTable(list: Array<Item>) {
    const table = new Table({
      head: [
        chalk.greenBright('shortcode'),
        chalk.greenBright('title'),
        chalk.greenBright('due date')
      ]
    });
    for (let i = 0; i < list.length; i++) {
      const uuid = list[i].uuid.slice(0, 6);
      let dueDate: any = list[i].dueDate;
      dueDate = dueDate ? `${chalk.bold.red(dueDate.fromNow())}` : '';
      table.push([uuid, list[i].title, dueDate]);
    }
    return table;
}