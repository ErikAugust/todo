import {Command, flags} from '@oclif/command';
import { displayAsciiArt } from '../misc/ascii';
import {newItemPrompt} from '../prompts/new-item';
import chalk from 'chalk';
import {Todo, Item} from '@eaj/todo';

export default class Add extends Command {
  static description = 'add a new todo list item';

  static flags = {
    category: flags.string({
      char: 'c',
      default: 'inbox',
      multiple: false,
      description: 'category where item will be added'
    }),
    dueDate: flags.string({
      char: 'd',
      multiple: false,
      description: 'due date of item (example: "2020-09-30")'
    }),
    url: flags.string({
      char: 'u',
      multiple: false,
      description: 'hyperlink relating to item (example: "https://google.com")'
    })
  }

  async run() {
    const {flags} = this.parse(Add);
    const { title, intention, action } = await newItemPrompt();

    const todo = new Todo();
    const item = new Item({
      title,
      intention,
      ...flags
    })
    if (action) {
      item.actions = [
        new Item({ title: action })
      ];
    }
    todo.list.push(item);
    todo.save();
    
    await displayAsciiArt('Todo');
    this.log(`${chalk.bold.green(title)} has been added to list.`);
    
  }
}
