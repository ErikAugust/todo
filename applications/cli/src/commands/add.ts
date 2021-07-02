import {Command, flags} from '@oclif/command';
import { displayAsciiArt } from '../misc/ascii';
import {newItemPrompt} from '../prompts/new-item';
import chalk from 'chalk';
import {Todo, Item} from '@eaj/todo';

export default class Add extends Command {
  static description = 'add a new todo list item';
  static aliases = ['new'];

  static flags = {
    category: flags.string({
      char: 'c',
      default: 'inbox',
      multiple: false,
      description: 'category where item will be added'
    }),
    url: flags.string({
      char: 'u',
      multiple: false,
      description: 'hyperlink relating to item (example: "https://google.com")'
    })
  }

  async run() {
    const {flags} = this.parse(Add);
    const { title, intention, action, dueDate } = await newItemPrompt();

    const todo = new Todo();
    const item = new Item({
      title,
      intention,
      dueDate,
      ...flags
    })
    if (action) {
      item.actions = [
        new Item({ title: action, action: true })
      ];
    }
    todo.list.push(item);
    todo.save();

    await displayAsciiArt('Todo');
    this.log(
      `${chalk.bold.green(title)} [${chalk.green.bold(item.getUuidShortcode())}] added to list.`
    );
    
  }
}
