import {Command, flags} from '@oclif/command';
import {getItemsByCategory, sortByDueDate, Todo} from '@eaj/todo';
import chalk from 'chalk';
import {displayAsciiArt} from '../misc/ascii';
import {itemFromListPrompt} from '../prompts/item-from-list';
import {getItemTable} from '../tables/item';

export default class List extends Command {
  static description = 'view list of todo items';
  static flags = {
    list: flags.string({
      char: 'l',
      default: 'list',
      multiple: false,
      description: 'list to be shown'
    })
  };
  static args = [
    {
      name: 'category',
      description: 'list by category of items',
    }
  ];

  async run() {
    try {
      const {args,flags} = this.parse(List);
      const category = args.category?.toLowerCase();
      const todo = new Todo();
      const list = getList(flags.list, todo);
  
      let items = category ? getItemsByCategory(list, category) : list;
      
      // If no items:
      if (!items.length) {
        await displayAsciiArt('Todo');
        this.log(!category ? `There are no items.` : `There are no items for ${chalk.green.bold(category)}.\n`);
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

function getList(list: string, todo: Todo) {
  if (list === 'archive') {
    return todo.archive;
  } else if (list === 'trash') {
    return todo.trash;
  } else {
    return todo.list;
  }
}