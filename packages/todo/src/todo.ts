import {config} from 'dotenv';
import {readFileSync, writeFileSync} from 'fs';
import Item, {DeserializedItem} from './item';
import * as os from 'os';

// Check for .env configuration file:
config();

// Checks for environment variable, falls back to home directory:
export const PATH: string = process.env.TODO_PATH || `${os.homedir()}/todo.json`;

interface TodoConfig {
  created?: string;
}

interface DeserializedTodo {
  list: Array<DeserializedItem>;
  archive: Array<DeserializedItem>;
  trash: Array<DeserializedItem>;
  config: TodoConfig;
}

/**
 * @class Todo
 * @author Erik August Johnson <erik@eaj.io>
 */
export default class Todo {
  path: string;
  list: Array<Item>;
  archive: Array<Item>;
  trash: Array<Item>;
  file!: Buffer;

  constructor(path?: string) {
    this.path = path || PATH;
    const todo: DeserializedTodo = this.load();
    this.list = todo.list.map(item => new Item(item));
    this.archive = todo.archive.map(item => new Item(item));
    this.trash = todo.trash.map(item => new Item(item));
  }

  /**
   * Saves the current Todo nstance to the Todo JSON file
   */
  public save(): void {
    const todo = {
      list: this.list,
      archive: this.archive,
      trash: this.trash,
      config: {}
    };
    writeFileSync(this.path, JSON.stringify(todo, null, 2));
  }

  /**
   * Finds an item via shortcode - can be a deeply nested action
   * @param {string} shortUuid 
   * @param {string} list
   */
  public findItem(shortUuid: string, list: string = 'list'): Item | undefined {
    if (this.listHasItem(shortUuid)) {
      for (const item of this[list]) {
        // Base case:
        const condition = item.uuid.slice(0, 6) === shortUuid;
        if (condition) {
          return item;
        } else if (item.actions && item.actions.length) {
          const nested = this.findNestedItem(shortUuid, item.actions);
          if (nested) {
            return nested;
          }
        }
      }
      return undefined;
    }
  }

  private findNestedItem(shortUuid: string, items: Array<Item>): Item | undefined {
    for (const item of items) {
      // Base case:
      const condition = item.uuid.slice(0, 6) === shortUuid;
      if (condition) {
        return item;
      }
      if (item.actions && item.actions.length) {
        return this.findNestedItem(shortUuid, item.actions);
      }
    }
    return undefined;
  }

  /**
   * Gleans if list has the ID present via looking at the serialized version
   * @param {string} shortUuid 
   */
  public listHasItem(shortUuid: string): boolean {
    return this.file.toString().indexOf(shortUuid) > -1;
  }

  /**
   * Loads and deserializes the Todo JSON file
   */
  private load(): DeserializedTodo {
    this.file = readFileSync(this.path);
    return JSON.parse(this.file.toString());
  }
}