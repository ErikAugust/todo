import {Command} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {activePrompt} from '../prompts/active';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';

export default class Active extends Command {
  static description = 'sets archived items to active';


  async run() {
    const {args} = this.parse(Active);
    const todo = new Todo();
    const archive = todo.archive;

    // Prompt to select archived items:
    const items = await activePrompt(archive);

    if (items.length) {
      await displayAsciiArt('Todo');
    }
    items.forEach((item) => {
      const index = todo.archive.findIndex((element) => element.uuid === item);
      if (index === -1) {
        return;
      } 
      // Make a copy and remove from list:
      const copy = todo.archive[index];
      copy.completed = false;
      todo.archive.splice(index, 1);
      // Add to active list:
      todo.list.push(copy);
      todo.save();
      this.log(`${chalk.green.bold(copy.title)} is set to incomplete and active.`);
    });
  }
}
