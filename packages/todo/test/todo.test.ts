import { Todo } from '../src/index';
import {describe, expect, it} from '@jest/globals';


describe('Todo', () => {
    describe('new Todo()', () => {
        const todo = new Todo('./todo.json');
        const list = todo.list;
        
        it('has a list of items', () => {
            expect(list.length).toBeGreaterThan(0);
        });

        it('finds an item by shortcode', () => {
            const item = todo.findItem('d053dd');
            expect(typeof item).toBe('object');
            expect(item.title).toBe('Download and remove unused S3 buckets');
        });

        it('finds a nested item by shortcode', () => {
            const item = todo.findItem('0bc5e0');
            expect(typeof item).toBe('object');
            expect(item.title).toBe('Finish draft of the request letter');
        });
    });
});