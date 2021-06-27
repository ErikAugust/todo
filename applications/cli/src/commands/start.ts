import {Command, flags} from '@oclif/command';
import { displayAsciiArt } from '../misc/ascii';
import { createNewFilePrompt } from '../prompts/new-file';
import { checkIfFileExists, createNewListFiles } from '../misc/create-new';

export default class Start extends Command {
  static description = 'start a new todo list';

  async run() {
    const {args} = this.parse(Start);

    await displayAsciiArt('Todo');
    this.log('Creating a new todo list...');

    // Prompt user for a new file path:
    const { newFile } = await createNewFilePrompt();

    if (checkIfFileExists(newFile)) {
      this.log(`Lists already exist at ${newFile}! Stopping.`);
    } else {
      await createNewListFiles(newFile);
      this.log(`New todo lists created at ${newFile}! New .env file also created.`);
    }
  }
}
