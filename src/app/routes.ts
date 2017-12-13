import { Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { CountriesService } from './services/countries.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact-form',  component: ContactFormComponent },
  { path: '**', redirectTo: '' }
];
