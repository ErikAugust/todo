
import { Item } from '../src/index';
import {describe, expect, it} from '@jest/globals';

describe('Item', () => {
    describe ('new Item()', () => {
        const item = new Item({ title: 'An example item' });

        it('is a new instance of Item', () => {
            expect(item).toBeInstanceOf(Item);
        });

        it('generates a valid v4 UUID', () => {
            expect(typeof item.uuid).toEqual('string');
            const regEx = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
            expect(regEx.test(item.uuid)).toBeTruthy();
        });
  
        it('is set to incomplete when created', () => {
            expect(item.completed).toBeFalsy();
        });
  
        it('can add a next action', () => {
            item.addAction(new Item({ title: 'An example next action' }));
            expect(item.actions?.length).toEqual(1);
        });
  
        it('can get the next action', () => {
            expect(item.getNextAction()?.title).toEqual('An example next action');
        });
  });
});
