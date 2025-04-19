import { Routes } from '@angular/router';
import { ListSectionComponent } from './components/list-section/list-section.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

const sectionTypes = ['active', 'soon', 'important', 'completed'];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo',
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
          { path: 'new', loadComponent: () => TodoEditComponent },
          { path: ':todoId', loadComponent: () => TodoDetailComponent },
          { path: ':todoId/edit', loadComponent: () => TodoEditComponent },
        ],
      })),
    ],
  },
];
