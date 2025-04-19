import { Component, signal } from '@angular/core';
import { Todo } from '../../model/class/todo';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Save, Star, X, XCircle } from 'lucide-angular';
import { TagComponent } from '../ui/tag/tag.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { DatePickerComponent } from '../ui/date-picker/date-picker.component';
import { TimePickerComponent } from '../ui/time-picker/time-picker.component';
import {
  ButtonGroupComponent,
  ButtonGroupOption,
} from '../ui/button-group/button-group.component';

@Component({
  selector: 'app-todo-edit',
  imports: [
    FormsModule,
    RouterModule,
    LucideAngularModule,
    TagComponent,
    DatePipe,
    SelectComponent,
    DatePickerComponent,
    TimePickerComponent,
    ButtonGroupComponent,
  ],
  templateUrl: './todo-edit.component.html',
  styles: ``,
})
export class TodoEditComponent {
  todoData: Todo = new Todo();

  readonly Star = Star;
  readonly X = X;
  readonly Save = Save;
  readonly Cancel = XCircle;

  readonly priorityOption: SelectOption[] = [
    {
      id: 'high',
      label: 'High',
    },
    {
      id: 'medium',
      label: 'Medium',
    },
    {
      id: 'low',
      label: 'Low',
    },
  ];

  onSelectPriority(priority: SelectOption) {
    this.todoData.priority = priority.id;
  }

  readonly repeatOption: SelectOption[] = [
    {
      id: 'no-repeat',
      label: "Don't repeat",
    },
    {
      id: 'once',
      label: 'Only once',
    },
    {
      id: 'always',
      label: 'Always repeat',
    },
  ];

  onSelectRepeat(repeat: SelectOption) {
    this.todoData.repeat = repeat.id;
  }

  readonly timeModeOptions: ButtonGroupOption[] = [
    {
      id: 'all-day',
      label: 'All day',
    },
    {
      id: 'time',
      label: 'Time',
    },
  ];

  onClickTimeMode(mode: ButtonGroupOption) {
    this.todoData.timeMode = mode.id;
  }

  onToggleFavourite() {
    this.todoData.favourite = !this.todoData.favourite;
  }

  onClickCancel() {}

  onClickSave() {}
}
