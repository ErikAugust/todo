import {Command} from '@oclif/command';
import {getItemsByCategory, sortByDueDate, Todo} from '@eaj/todo';
import chalk from 'chalk';
import {displayAsciiArt} from '../misc/ascii';
import {itemFromListPrompt} from '../prompts/item-from-list';
import {getItemTable} from '../tables/item';

export default class List extends Command {
  static description = 'view list of todo items';
  static flags = {};
  static args = [
    {
      name: 'category',
      description: 'list by category of items',
    }
  ];

  async run() {
    try {
      const {args} = this.parse(List);
      const category = args.category?.toLowerCase();
      const todo = new Todo();
      const list = todo.list;
  
      let items = category ? getItemsByCategory(list, category) : list;
      
      // If no items:
      if (!items.length) {
        await displayAsciiArt('Todo');
        this.log(`There are no items for ${chalk.green.bold(category)}.\n`);
        process.exit(0);
      }
      
      // Sort by due date:
      items = sortByDueDate(items);

      // View list and selected item:
      const itemIndex = await itemFromListPrompt(items);
      getItemTable(items[itemIndex]);

    } catch (error) {
      this.log('An error has occurred:');
      console.error(error);
    }
  }
}
