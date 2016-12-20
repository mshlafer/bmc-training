import { UserGuard } from './user-guard';
import { TodolistComponent } from './todolist/todolist.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'prefix' },

    { 
        path: 'login', 
        component: LoginComponent,        
    },

    { 
        path: 'list', 
        component:  TodolistComponent,
        canActivate: [UserGuard]         
    }
];