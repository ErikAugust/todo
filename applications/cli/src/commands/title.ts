import {Command} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';
import { titlePrompt } from '../prompts/title';

export default class Title extends Command {
  static description = 'update the title of item or action';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item to add action',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Title);
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

    const {title} = await titlePrompt(item);
    item.title = title;
    todo.save();

    await displayAsciiArt('Todo');
    this.log(
      `\n${chalk.underline(item.title)} [${chalk.green.bold(item.getUuidShortcode())}] updated.\n`
    );
  }
}
