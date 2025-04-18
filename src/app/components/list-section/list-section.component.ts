import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/class/todo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-section',
  imports: [JsonPipe],
  templateUrl: './list-section.component.html',
  styles: ``,
})
export class ListSectionComponent implements OnInit {
  sectionType: string | null = null;

  todoService = inject(TodoService);
  todoList = signal<Todo[]>([]);

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.sectionType = data['sectionType'];
    });
  }

  ngOnInit(): void {
    switch (this.sectionType) {
      case 'active':
        this.todoService
          .getActiveTodo()
          .subscribe((res) => this.todoList.set(res));
        return;
      case 'soon':
        this.todoService
          .getSoonTodo()
          .subscribe((res) => this.todoList.set(res));
        return;
      case 'important':
        this.todoService
          .getImportantTodo()
          .subscribe((res) => this.todoList.set(res));
        return;
      case 'completed':
        this.todoService
          .getCompletedTodo()
          .subscribe((res) => this.todoList.set(res));
        return;
    }
  }
}
