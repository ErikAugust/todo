import {Command, flags} from '@oclif/command';
import {Todo, Item} from '@eaj/todo';
import { displayAsciiArt } from '../misc/ascii';
import chalk from 'chalk';
import { getItemTable } from '../tables/item';

export default class View extends Command {
  static description = 'view information for an item or action';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item or action to view',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(View);
    const {shortcode} = args;
    const todo = new Todo();

    const item = todo.findItem(shortcode);
    if (!item) {
      await displayAsciiArt('Todo');
      this.log(`No item found for ${chalk.green.bold(shortcode)}.\n`);
      process.exit(0);
    }
    getItemTable(item);
  }
}
