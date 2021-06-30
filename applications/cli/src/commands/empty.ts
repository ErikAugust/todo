import {Command} from '@oclif/command';
import {emptyTrashPrompt} from '../prompts/empty';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';

export default class Empty extends Command {
  static description = 'empties the trash bin';

  async run() {
    const {args} = this.parse(Empty);

    const confirm = await emptyTrashPrompt();

    if (confirm) {
      const todo = new Todo();
      todo.trash = [];
      todo.save();

      await displayAsciiArt('Todo');
      this.log('The trash bin has been successfully emptied.')
    }

  }
}
