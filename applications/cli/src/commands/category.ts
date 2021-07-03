import {Command} from '@oclif/command';
import { Todo } from '@eaj/todo';
import { displayAsciiArt } from '../misc/ascii';
import chalk from 'chalk';

export default class Category extends Command {
  static description = 'updates the category of item'

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item to update category',
      required: true
    },
    {
      name: 'category',
      description: 'category of item',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Category);
    const { shortcode, category } = args;
    const todo = new Todo();

    // Find item by shortcode:
    const item = todo.findItem(shortcode);
    
    // No item found by shortcode:
    if (!item) {
      await displayAsciiArt('Todo');
      this.log(`No item found for ${chalk.green.bold(shortcode)}.\n`);
      process.exit(0);
    }

    item.category = category;
    todo.save();

    await displayAsciiArt('Todo');
    this.log(
      `\n${chalk.green.bold(item.title)} [${item.getUuidShortcode()}] has updated category: ${item.category}\n`
    );
  }
}
