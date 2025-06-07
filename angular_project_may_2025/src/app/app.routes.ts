import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'careers', component: CareerComponent},
    {path: 'contactus',component: ContactusComponent },
    {path: 'users',component: UsersComponent },
    {path: 'userdetails/:id',component: UserdetailsComponent },
    {path: '', component:HomeComponent},
    {path: '**', component:HomeComponent}
];
