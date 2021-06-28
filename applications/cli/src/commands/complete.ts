import { sortByDueDate, Todo } from '@eaj/todo';
import {Command} from '@oclif/command';
import { displayAsciiArt } from '../misc/ascii';
import chalk from 'chalk';
import {completePrompt} from '../prompts/complete';

export default class Complete extends Command {
  static description = 'mark item or action as complete';

  static args = [
    {
      name: 'shortcode',
      description: 'shortcode of item or action to complete'
    }
  ];

  async run() {
    const {args} = this.parse(Complete);
    const shortcode = args.shortcode;
    const todo = new Todo();

    // Find and complete item/action by shortcode:
    if (shortcode) {
      const item = todo.findItem(shortcode);

      if (item) {
        // Item is an action, just set to complete:
        if (item.action) {
          item.complete();
          todo.save();
          await displayAsciiArt('Todo');
          this.log(`${chalk.green.bold(item.title)} is set to complete.`);
        } else {
        
        // Item is not an action, set to complete and archive:
        const index = todo.list.findIndex((element) => element.uuid === item.uuid);
        if (index === -1) {
          return;
        } 
        // Make a copy and remove from list:
        const copy = todo.list[index];
        copy.complete();
        todo.list.splice(index, 1);
        // Add to archive:
        todo.archive.push(copy);
        todo.save();
        await displayAsciiArt('Todo');
        this.log(`${chalk.green.bold(item.title)} is set to complete and archived.`);
        }
      } else {
        // Not found
        await displayAsciiArt('Todo');
        this.log(`No item or action has been found for ${chalk.green.bold(shortcode)}.`)
        process.exit(0);
      }
    } else {
      // No shortcode given - display top-level selection list:
      const items = sortByDueDate(todo.list);
      const completedItems = await completePrompt(items);
      // For each completed item:
      if (completedItems.length) {
        await displayAsciiArt('Todo');
      }
      completedItems.forEach((item) => {
        const index = todo.list.findIndex((element) => element.uuid === item);
        if (index === -1) {
          return;
        } 
        // Make a copy and remove from list:
        const copy = todo.list[index];
        copy.complete();
        todo.list.splice(index, 1);
        // Add to archive:
        todo.archive.push(copy);
        todo.save();
        this.log(`${chalk.green.bold(copy.title)} is set to complete and archived.`);
      });
    }
  }
}
