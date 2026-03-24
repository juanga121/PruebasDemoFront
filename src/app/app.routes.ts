import { Routes } from '@angular/router';
import { ListCreditosComponent } from './features/creditos/list-creditos/list-creditos.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: ListCreditosComponent }
    
];
