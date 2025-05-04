import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/class/todo';
import { TitleCasePipe } from '@angular/common';
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
        t.title
          .toLowerCase()
          .includes(this.todoService.search()?.toLowerCase()) ||
        t.description
          .toLowerCase()
          .includes(this.todoService.search()?.toLowerCase())
      );
    })
  );

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.sectionType.set(data['sectionType']);
    });

    effect(() => {
      this.todoService.reloadSignal();
      switch (this.sectionType()) {
        case 'active':
          this.todoService
            .getActiveTodo()
            .subscribe((res) => this.todoList.set(res));
          return;
        case 'soon':
          console.log('hereee');
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

  shouldShowBackdrop(): boolean {
    const child = this.route.firstChild;
    const childPath = child?.snapshot.routeConfig?.path;

    // Return true for 'new', ':todoId', or ':todoId/edit'
    return (
      childPath === 'new' ||
      childPath === ':todoId' ||
      childPath === ':todoId/edit'
    );
  }
}
