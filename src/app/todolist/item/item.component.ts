import { Todolist } from './../todolist';
import { Item } from './../item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  @Input() 
  private item:Item;
  private todolist:Todolist

  constructor(todolist:Todolist){
    this.todolist = todolist;
  }



}
