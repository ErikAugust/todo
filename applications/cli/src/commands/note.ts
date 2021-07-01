import {Command, flags} from '@oclif/command';
import {Todo} from '@eaj/todo';
import {displayAsciiArt} from '../misc/ascii';
import chalk from 'chalk';
import {newNotePrompt} from '../prompts/new-note';


export default class Note extends Command {
  static description = 'add a note to the specified item or action'

  static args = [
    {
      name: 'shortcode',
      required: true,
      description: 'shortcode of item to add action'
    }
  ];

  async run() {
    const {args} = this.parse(Note);
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

    // Prompt for note:
    const { note } = await newNotePrompt();
    item.addNote(note);
    todo.save();

    await displayAsciiArt('Todo');
    this.log(`\nNote added to ${chalk.underline(item.title)} [${chalk.green.bold(item.getUuidShortcode())}].\n`);

  }
}
