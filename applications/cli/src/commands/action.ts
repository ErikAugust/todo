import {Command} from '@oclif/command';
import {Todo, Item} from '@eaj/todo';
import chalk from 'chalk';
import {displayAsciiArt} from '../misc/ascii';
import { newActionPrompt } from '../prompts/new-action';

export default class Action extends Command {
  static description = 'adds action to given item';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item to add action',
      required: true
    }
  ];

  async run() {
    const {args} = this.parse(Action);

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
    const action = await newActionPrompt();
    action.action = true;
    const actionItem = new Item(action);
    item.addAction(actionItem);
    todo.save();
    await displayAsciiArt('Todo');
    this.log(`\n${chalk.green.bold(actionItem.title)} [${actionItem.getUuidShortcode()}] has been created.\n`);
  }
}
