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
        this.todoService.getTodoById(this.todoId).subscribe((res) => {
          if (res) {
            this.todoData = res;
          }
        });
      }
    });
  }

  readonly priorityOption: SelectOption[] = [
    {
      id: '0',
      label: 'High',
      color: 'fill-[#fca5a5]',
    },
    {
      id: '1',
      label: 'High to medium',
      color: 'fill-[#fdba74]',
    },
    {
      id: '2',
      label: 'Medium',
      color: 'fill-[#fde68a]',
    },
    {
      id: '3',
      label: 'Medium to low',
      color: 'fill-[#a5f3fc]',
    },
    {
      id: '4',
      label: 'Low',
      color: 'fill-[#bbf7d0]',
    },
  ];

  onSelectPriority(priority: SelectOption) {
    this.todoData.priority = +priority.id;
  }

  readonly repeatOption: SelectOption[] = [
    {
      id: '0',
      label: "Don't repeat",
    },
    {
      id: '1',
      label: 'Repeat',
    },
  ];

  onSelectRepeat(repeat: SelectOption) {
    this.todoData.isRepeating = Boolean(+repeat.id);
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

  onToggleFavorite() {
    this.todoData.isFavorite = !this.todoData.isFavorite;
  }

  onTagSave(tag: string) {
    this.todoData.tag.push(tag);
  }

  onTagRemove(tag: string) {
    this.todoData.tag = this.todoData.tag.filter((t) => t !== tag);
  }

  onClickCancel() {}

  onClickSave() {
    this.todoService
      .updateTodo(this.todoId!, this.todoData)
      .subscribe((res) => {
        if (res) {
          this.todoData = res;
        }
      });
  }
}
