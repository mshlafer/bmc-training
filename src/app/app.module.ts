import { LoginModule } from './login/login.module';
import { TodolistModule } from './todolist/todolist.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
 declarations: [AppComponent],  
 imports     : [
   BrowserModule, 
   TodolistModule,
   LoginModule
   ],
 bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {
    console.log("app module instance");
  }
}

