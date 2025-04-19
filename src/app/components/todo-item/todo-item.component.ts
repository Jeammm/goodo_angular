import { Component, input } from '@angular/core';
import { Todo } from '../../model/class/todo';
import { LucideAngularModule, Star } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './todo-item.component.html',
  styles: ``,
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  selected = input<boolean>(false);
  readonly Star = Star;
}
