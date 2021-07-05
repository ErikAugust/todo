import {Command} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';
import { intentionPrompt } from '../prompts/intention';

export default class Intention extends Command {
  static description = 'update the intention of item or action';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item to add action',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Intention);
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

    const { intention } = await intentionPrompt(item);
    item.intention = intention;
    todo.save();



  }
}
