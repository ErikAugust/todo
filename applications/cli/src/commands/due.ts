import {Command} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';
import { duePrompt } from '../prompts/due';

export default class Due extends Command {
  static description = 'set the due date of an item or action';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item or action to complete',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Due);

    const shortcode = args.shortcode;
    const todo = new Todo();

    // Find item by shortcode:
    const item = todo.findItem(shortcode);
    
    // No item found by shortcode:
    if (!item) {
      await displayAsciiArt('Todo');
      this.log(`No item found for ${chalk.green.bold(shortcode)}.\n`);
      process.exit(0);
    }

    const { dueDate } = await duePrompt();
    item.dueDate = dueDate;
    todo.save();

    await displayAsciiArt('Todo');
    this.log(
      `\nDue date added to ${chalk.underline(item.title)} [${chalk.green.bold(item.getUuidShortcode())}].\n`
    );
  }
}
