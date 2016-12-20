import { Logger } from './../bmc-utils/logger';
import { BmcUtilsModule } from './../bmc-utils/bmc-utils.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CounterComponent } from './counter/counter.component';
import { ClearBtnComponent } from './clear-btn/clear-btn.component';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './input/input.component';
import { ToggleComponent } from './toggle/toggle.component';
import { Todolist } from './todolist';

@NgModule({
  imports     : [CommonModule, BmcUtilsModule],
  declarations: [TodolistComponent, HeaderComponent, FooterComponent, MainComponent, ListComponent, ItemComponent, CounterComponent, ClearBtnComponent, TitleComponent, InputComponent, ToggleComponent],  
  providers   : [Todolist], 
  exports     : [TodolistComponent],
})
export class TodolistModule { 

  constructor(){
    console.log('todolist module instance');  
  }

}
