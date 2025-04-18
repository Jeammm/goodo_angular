import { Routes } from '@angular/router';
import { ListSectionComponent } from './components/list-section/list-section.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'active',
  },
  {
    path: 'active',
    loadComponent: () => ListSectionComponent,
    data: { sectionType: 'active' },
  },
  {
    path: 'soon',
    loadComponent: () => ListSectionComponent,
    data: { sectionType: 'soon' },
  },
  {
    path: 'important',
    loadComponent: () => ListSectionComponent,
    data: { sectionType: 'important' },
  },
  {
    path: 'completed',
    loadComponent: () => ListSectionComponent,
    data: { sectionType: 'completed' },
  },
];
