import { QuillModule } from 'ngx-quill';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Todo } from '../../model/class/todo';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
import Quill from 'quill';

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
    QuillModule,
  ],
  templateUrl: './todo-edit.component.html',
})
export class TodoEditComponent implements OnInit {
  todoService = inject(TodoService);
  todoId: string | null = null;

  todoData: Todo = new Todo();

  readonly Star = Star;
  readonly X = X;
  readonly Save = Save;
  readonly Cancel = XCircle;

  isNew = signal<boolean>(false);

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe((data) => {
      this.isNew.set(data['isNew']);
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('todoId');

      if (this.todoId !== null) {
        this.todoService.getTodoById(this.todoId).subscribe((res) => {
          if (res) {
            this.todoData = res;
            this.trySetEditorContent();
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
      id: 'ALL_DAY',
      label: 'All day',
    },
    {
      id: 'SOME_TIME',
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

  goToDetail() {
    const currentUrl = this.router.url;
    const targetUrl = currentUrl.replace('/edit', '');
    this.router.navigateByUrl(targetUrl);
  }

  goToNewTodo(id: string) {
    const currentUrl = this.router.url;
    const targetUrl = currentUrl.replace('new', id);
    console.log('qweqw');
    this.router.navigateByUrl(targetUrl);
  }

  onClickSave() {
    if (this.isNew()) {
      this.todoService.createTodo(this.todoData).subscribe((res) => {
        if (res) {
          this.todoData = res;
          this.todoService.reloadSignal.update((v) => v + 1);
          this.goToNewTodo(res.id);
        }
      });
    } else {
      this.todoService
        .updateTodo(this.todoId!, this.todoData)
        .subscribe((res) => {
          if (res) {
            this.todoData = res;
            this.todoService.reloadSignal.update((v) => v + 1);
            this.goToDetail();
          }
        });
    }
  }

  onDescriptionChange(change: any) {
    this.todoData.description = change.html;
  }

  editor: Quill | null = null;
  onQuillInstantCreated(editor: Quill) {
    this.editor = editor;
    this.trySetEditorContent();
  }

  trySetEditorContent() {
    if (this.editor && this.todoData?.description) {
      const delta = this.editor.clipboard.convert({
        html: this.todoData.description,
      });
      this.editor.setContents(delta, 'silent');
    }
  }
}
