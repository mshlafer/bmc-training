import { UserGuard } from './user-guard';
import { LoginModule } from './login/login.module';
import { TodolistModule } from './todolist/todolist.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
 declarations: [AppComponent],  
 providers: [UserGuard],
 imports     : [
   BrowserModule, 
   TodolistModule,
   LoginModule,
   RouterModule.forRoot(routes)
   ],
 bootstrap   : [AppComponent]
})

export class AppModule {

  constructor() {

  }
}

