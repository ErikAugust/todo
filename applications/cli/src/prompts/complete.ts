import inquirer from 'inquirer';
import {getDueDateLabel} from './item-from-list';
import { Item } from '@eaj/todo';

/**
 * Prompts user to set any items to complete in a list
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Array<Item>} items
 * @returns Promise<string[]>
 */
 export async function completePrompt(items: Array<Item>): Promise<string[]> {
    const prompt = await inquirer.prompt([
      {
        type: 'checkbox',
        message: 'Set item(s) to complete',
        name: 'items',
        choices: items.map(item => {
          const label = item.dueDate ? `${item.title} ${getDueDateLabel(item.dueDate)}` : item.title;
          return { name: label, value: item.uuid, checked: item.completed }
        })
      }
    ]);
    return prompt.items;
  }