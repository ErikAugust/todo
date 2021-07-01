import {Command} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';

export default class Url extends Command {
  static description = 'add a url to item or action'

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item to add url',
      required: true
    },
    {
      name: 'url',
      description: 'url to set as item url',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Url);
    const shortcode = args.shortcode;
    const url = args.url;
    const todo = new Todo();

    // Find item by shortcode:
    const item = todo.findItem(shortcode);
    
    // No item found by shortcode:
    if (!item) {
      await displayAsciiArt('Todo');
      this.log(`No item found for ${chalk.green.bold(shortcode)}.\n`);
      process.exit(0);
    }
    item.url = url;
    todo.save();

    await displayAsciiArt('Todo');
    this.log(
      `\nURL added to ${chalk.underline(item.title)} [${chalk.green.bold(item.getUuidShortcode())}].\n`
    );
  }
}
