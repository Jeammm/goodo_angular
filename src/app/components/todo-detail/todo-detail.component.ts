import { Component, inject, OnInit, output, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Todo } from '../../model/class/todo';
import {
  Check,
  FileEdit,
  LucideAngularModule,
  Star,
  Trash2,
  Undo2,
  X,
} from 'lucide-angular';
import { DatePipe } from '@angular/common';
import { TagComponent } from '../ui/tag/tag.component';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-todo-detail',
  imports: [
    LucideAngularModule,
    RouterModule,
    DatePipe,
    TagComponent,
    QuillModule,
  ],
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent implements OnInit {
  todoService = inject(TodoService);
  todoId: string | null = null;

  todoData = signal<Todo>(new Todo());

  readonly Check = Check;
  readonly Uncheck = Undo2;
  readonly Edit = FileEdit;
  readonly Delete = Trash2;
  readonly Star = Star;
  readonly X = X;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('todoId');

      if (this.todoId !== null) {
        this.todoService.getTodoById(this.todoId).subscribe((res) => {
          if (res) {
            this.todoData.set(res);
          }
        });
      }
    });
  }

  onClickComplete() {
    this.todoData().isDone = !this.todoData().isDone;
    this.todoService
      .toggleTodoCompletedById(this.todoData().id, this.todoData().isDone)
      .subscribe({
        next: (res) => {
          this.todoService.reloadSignal.update((v) => v + 1);
        },
        error: (err) => {
          console.error('Delete failed:', err);
          this.todoData().isDone = !this.todoData().isDone;
        },
      });
  }

  onClickDelete() {
    this.todoService.deleteTodoById(this.todoData().id).subscribe({
      next: (res) => {
        this.todoService.reloadSignal.update((v) => v + 1);
        this.router.navigate(['../']);
      },
      error: (err) => {
        console.error('Delete failed:', err);
      },
    });
  }
}
