import { Logger } from './../bmc-utils/logger';
import { Item } from './item';
import {Injectable} from '@angular/core';

@Injectable()
export class Todolist {

    private items: Item[];
    private logger: Logger;
    private APP_ID: string;

    constructor(logger: Logger) {
        this.items = [];
        this.logger = logger;        
        console.log('todolist model instance');
    }

    public getItems(): Item[] {
        return this.items;
    }

    public addItem(value: string): void {
        this.items.push(new Item(value));
        this.logger.debug(`id: item added: ${value}`);
    }

    public removeItem(item: Item): void {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.logger.debug(`item removed: ${item.title}`);
    }

    public toggleItems(state: boolean): void {
        this.items.forEach(item => item.done = state);
    }
}