import { Logger } from './../bmc-utils/logger';
import { Item } from './item';
import { Component, OnInit, SkipSelf, Optional, Self } from '@angular/core';
import { Todolist } from './todolist'


@Component({
  selector: 'app-todolist',   
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {  
  private todolist: Todolist;
  private flag: boolean;

  constructor(todolist:Todolist, logger: Logger){          
    this.todolist = todolist;    
    this.flag = true;    
  }
  
}
