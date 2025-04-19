import { Component, inject, input } from '@angular/core';
import { Todo } from '../../model/class/todo';
import {
  ChevronRight,
  LucideAngularModule,
  Star,
  FileEdit,
} from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './todo-item.component.html',
  styles: ``,
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  selected = input<boolean>(false);

  todoService = inject(TodoService);

  readonly Star = Star;
  readonly ChevronRight = ChevronRight;
  readonly FileEdit = FileEdit;
}
