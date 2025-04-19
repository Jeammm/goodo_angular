import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/class/todo';
import { JsonPipe, TitleCasePipe } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-list-section',
  imports: [TitleCasePipe, TodoItemComponent, RouterModule],
  templateUrl: './list-section.component.html',
  styles: ``,
})
export class ListSectionComponent implements OnInit {
  sectionType = signal<string | null>(null);

  todoService = inject(TodoService);
  todoList = signal<Todo[]>([]);

  filteredTodoList = computed(() =>
    this.todoList().filter((t) => {
      return (
        t.name
          .toLowerCase()
          .includes(this.todoService.search().toLowerCase()) ||
        t.description
          .toLowerCase()
          .includes(this.todoService.search().toLowerCase())
      );
    })
  );

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.sectionType.set(data['sectionType']);
    });
  }

  ngOnInit(): void {
    switch (this.sectionType()) {
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
