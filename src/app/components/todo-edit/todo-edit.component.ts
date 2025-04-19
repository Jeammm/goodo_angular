import { Component, signal } from '@angular/core';
import { Todo } from '../../model/class/todo';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Save, Star, X, XCircle } from 'lucide-angular';
import { TagComponent } from '../ui/tag/tag.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-edit',
  imports: [RouterModule, LucideAngularModule, TagComponent, DatePipe],
  templateUrl: './todo-edit.component.html',
  styles: ``,
})
export class TodoEditComponent {
  todoData = signal(new Todo());

  readonly Star = Star;
  readonly X = X;
  readonly Save = Save;
  readonly Cancel = XCircle

  onClickCancel() {}

  onClickSave() {}
}
