import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    public debug(value: string): void {
        console.log(value)
    }

}
