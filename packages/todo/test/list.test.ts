import { Todo, getItemsByCategory, findItemByShortUuid, sortByDueDate } from '../src/index';
import {describe, expect, it} from '@jest/globals';

const todo = new Todo('./todo.json');
const list = todo.list;

describe('getItemsByCategory', () => {
    it('gets items by category', () => {
        const items = getItemsByCategory(list, 'inbox');
        expect(items.length).toBe(1);
        expect(items[0].title).toBe('Request a full refund for item')
    });
});

describe('findItemByShortUuid', () => {
    it('finds an item by a six-digit shortcode', () => {
        const item = findItemByShortUuid(list, '1cdf1c');
        expect(item.title).toBe('Request a full refund for item');
    });
});

describe('sortByDueDate', () => {
    it('sorts items by due date', () => {
        const items = sortByDueDate(list);
        expect(items[0].title).toBe('Download and remove unused S3 buckets');
        expect(items[1].title).toBe('Move to key-based authentication with GitHub');
    });
});
