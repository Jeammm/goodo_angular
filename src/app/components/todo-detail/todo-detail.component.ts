import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Todo } from '../../model/class/todo';
import {
  Check,
  FileEdit,
  LucideAngularModule,
  Star,
  Trash2,
  X,
} from 'lucide-angular';
import { DatePipe } from '@angular/common';
import { TagComponent } from "../ui/tag/tag.component";

@Component({
  selector: 'app-todo-detail',
  imports: [LucideAngularModule, RouterModule, DatePipe, TagComponent],
  templateUrl: './todo-detail.component.html',
  styles: ``,
})
export class TodoDetailComponent implements OnInit {
  todoService = inject(TodoService);
  todoId: string | null = null;

  todoData = signal<Todo>(new Todo());

  readonly Check = Check;
  readonly Edit = FileEdit;
  readonly Delete = Trash2;
  readonly Star = Star;
  readonly X = X;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('todoId');

      if (this.todoId !== null) {
        this.todoService.getTodoById(Number(this.todoId)).subscribe((res) => {
          if (res) {
            this.todoData.set(res);
          }
        });
      }
    });
  }

  onClickComplete() {
    this.todoService.toggleTodoCompletedById(
      this.todoData().id,
      !this.todoData().completed
    );
  }

  onClickDelete() {
    this.todoService.deleteTodoById(this.todoData().id);
  }
}
