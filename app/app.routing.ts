import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent }  from './components/about/about.component';
import { ContactsComponent }  from './components/contacts/contacts.component';

const routes:Routes= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path:'contacts',
        component: ContactsComponent
    }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(routes);