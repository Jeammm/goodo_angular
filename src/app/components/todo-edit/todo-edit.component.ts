import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../../model/class/todo';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
import { TodoService } from '../../services/todo.service';
import { TagInputComponent } from '../tag-input/tag-input.component';

@Component({
  selector: 'app-todo-edit',
  imports: [
    FormsModule,
    RouterModule,
    LucideAngularModule,
    SelectComponent,
    DatePickerComponent,
    TimePickerComponent,
    ButtonGroupComponent,
    TagInputComponent,
  ],
  templateUrl: './todo-edit.component.html',
  styles: ``,
})
export class TodoEditComponent implements OnInit {
  todoService = inject(TodoService);
  todoId: string | null = null;

  todoData: Todo = new Todo();

  readonly Star = Star;
  readonly X = X;
  readonly Save = Save;
  readonly Cancel = XCircle;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('todoId');

      if (this.todoId !== null) {
        this.todoService.getTodoById(Number(this.todoId)).subscribe((res) => {
          if (res) {
            this.todoData = res;
          }
        });
      }
    });
  }

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

  onTagSave(tag: string) {
    this.todoData.tags.push(tag);
  }

  onTagRemove(tag: string) {
    this.todoData.tags = this.todoData.tags.filter((t) => t !== tag);
  }

  onClickCancel() {}

  onClickSave() {}
}
