import {Command} from '@oclif/command';
import {Todo, Item} from '@eaj/todo';
import chalk from 'chalk';

import {displayAsciiArt} from '../misc/ascii';
import {trashArchivePrompt} from '../prompts/trash-archive';

export default class TrashArchive extends Command {
  static description = 'moved archived items into trash bin';

  async run() {
    const {args} = this.parse(TrashArchive);
    const todo = new Todo();
    const list = todo.archive;

    // No items:
    if (!list.length) {
      await displayAsciiArt('Todo');
      this.log(`There are no items in the archive.\n`);
      process.exit(0);
    }

    // Display items:
    const itemsToTrash = await trashArchivePrompt(list);

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
