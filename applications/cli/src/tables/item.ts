import {Item} from '@eaj/todo';
const terminal = require('terminal-kit').terminal;

/**
 * Displays 'terminal-kit'-based table for a given item
 * @author Erik August Johnson <erik@eaj.io>
 * @param {Item} item
 */
 export function getItemTable(item: Item): void {
    // Uses markup:
    // https://github.com/cronvel/terminal-kit/blob/master/doc/markup.md
    
    const table = [
      [ 'title', `^+${item.title}` ],
      [ 'intention', `^/${item.intention || ''}` ],
      [ 'id', item.getUuidShortcode() ],
      [ 'url', item.url ],
      [ 'created at', item.createdAt.format('MMMM Do YYYY [at] h:mm:ss a') ],
      [ 'due date', item.dueDate?.format('MMMM Do YYYY [at] h:mm:ss a') ],
      [ 
        'actions', item.actions?.map(action => 
          `${action.completed ? '^-' : ''}* [${action.getUuidShortcode()}] ${action.title}`).join('\n') 
      ],
      [
        'notes', item.notes?.map(note => `* ${note}`).join(`\n`)
      ]
    ];
  
    terminal.table(
      table,
      {
        hasBorder: true,
        contentHasMarkup: true,
        borderAttr: { color: 'green' },
        textAttr: { bgColor: 'default' },
        firstColumnTextAttr: { color: 'green' },
        width: 60,
        fit: true
      }
    );
  }