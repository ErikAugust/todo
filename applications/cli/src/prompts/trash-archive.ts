import * as inquirer from 'inquirer';
import { Item } from '@eaj/todo';

/**
 * Prompts user to send items to trash in a list
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @returns Promise<string[]>
 */
 export async function trashArchivePrompt(items: Array<Item>): Promise<string[]> {
    const prompt = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Set item(s) to trash',
        name: 'items',
        choices: items.map(item => {
          const label = item.title;
          return { name: label, value: item.uuid }
        })
      }
    ]);
    return prompt.items;
}