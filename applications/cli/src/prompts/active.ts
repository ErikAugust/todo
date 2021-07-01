import inquirer from 'inquirer';
import {getDueDateLabel} from './item-from-list';
import { Item } from '@eaj/todo';

/**
 * Prompts user to set any items to active in a list
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @returns Promise<string[]>
 */
 export async function activePrompt(items: Array<Item>): Promise<string[]> {
    const prompt = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Set archived item(s) to active',
        name: 'items',
        choices: items.map(item => {
          const label = item.dueDate ? `${item.title} ${getDueDateLabel(item.dueDate)}` : item.title;
          return { name: label, value: item.uuid, checked: false }
        })
      }
    ]);
    return prompt.items;
  }