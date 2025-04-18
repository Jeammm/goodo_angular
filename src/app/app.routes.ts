import { Routes } from '@angular/router';
import { ListSectionComponent } from './components/list-section/list-section.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: 'active',
    loadComponent: () => ListSectionComponent,
  },
  {
    path: 'active',
    loadComponent: () => ListSectionComponent,
  },
  {
    path: 'soon',
    loadComponent: () => ListSectionComponent,
  },
  {
    path: 'important',
    loadComponent: () => ListSectionComponent,
  },
  {
    path: 'completed',
    loadComponent: () => ListSectionComponent,
  },
];
