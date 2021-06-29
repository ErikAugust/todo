import {Command} from '@oclif/command';
import {Todo, Item, getItemsByCategory, sortByDueDate} from '@eaj/todo';
import chalk from 'chalk';
import {displayAsciiArt} from '../misc/ascii';
import {trashPrompt} from '../prompts/trash';

export default class Trash extends Command {
  static description = 'move selected items to trash';
  static flags = {};
  static args = [
    {
      name: 'category',
      description: 'list by category of items',
    }
  ];

  async run() {
    const {args} = this.parse(Trash);
    const category = args.category?.toLowerCase();
    const todo = new Todo();
    const list = todo.list;

    let items = category ? getItemsByCategory(list, category) : list;

    // If no items:
    if (!items.length) {
      await displayAsciiArt('Todo');
      this.log(!category ? `There are no items.` : `There are no items for ${chalk.green.bold(category)}.\n`);
      process.exit(0);
    }

    // Sort by due date:
    items = sortByDueDate(items);

    const itemsToTrash = await trashPrompt(items);

    if (itemsToTrash.length) {
      await displayAsciiArt('Todo');
    }
    
    itemsToTrash.forEach(item => {
      const index = list.findIndex((element: Item) => element.uuid === item);

      if (index === -1) {
        return;
      }

      const copy = list[index];
      list.splice(index, 1);
      todo.trash.push(copy);
      todo.save();
      this.log(`${chalk.green.bold(copy.title)} has been moved to trash.`);
    });

  }
}
