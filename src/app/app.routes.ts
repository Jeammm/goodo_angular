import { Routes } from '@angular/router';
import { ListSectionComponent } from './components/list-section/list-section.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { SettingsComponent } from './components/settings/settings.component';

const sectionTypes = ['active', 'soon', 'important', 'completed'];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
  },
  {
    path: 'setting',
    component: SettingsComponent,
  },
  {
    path: 'todo',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'active',
      },
      ...sectionTypes.map((type) => ({
        path: type,
        loadComponent: () => ListSectionComponent,
        data: { sectionType: type },
        children: [
          {
            path: 'new',
            loadComponent: () => TodoEditComponent,
            data: { isNew: true },
          },
          { path: ':todoId', loadComponent: () => TodoDetailComponent },
          { path: ':todoId/edit', loadComponent: () => TodoEditComponent },
        ],
      })),
    ],
  },
];
