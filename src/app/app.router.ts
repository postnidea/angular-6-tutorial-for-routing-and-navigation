import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent},
{path:'contact', component:ContactComponent},
{path:'**', component:HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);