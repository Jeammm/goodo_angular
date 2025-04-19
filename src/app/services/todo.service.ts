import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockTodos } from '../model/class/todo';
import { Todo } from '../model/class/todo'; // make sure to import the type

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  search = signal<string>('');
  sort = signal<string>('priority');
  order = signal<string>('desc');

  onChangeSearch(q: string) {
    this.search.set(q);
  }

  getActiveTodo(): Observable<Todo[]> {
    return of(mockTodos.filter((t) => !t.completed));
  }

  getSoonTodo(): Observable<Todo[]> {
    return of(mockTodos.filter((t) => t.dueDate));
  }

  getImportantTodo(): Observable<Todo[]> {
    return of(mockTodos.filter((t) => t.priority !== 'Low'));
  }

  getCompletedTodo(): Observable<Todo[]> {
    return of(mockTodos.filter((t) => t.completed));
  }

  getTodoById(todoId: number): Observable<Todo | undefined> {
    return of(mockTodos.find((todo) => todo.id === todoId));
  }

  toggleTodoCompletedById(
    todoId: number,
    completed: boolean
  ): Observable<Todo | undefined> {
    return of(mockTodos.find((todo) => todo.id === todoId));
  }

  deleteTodoById(todoId: number): Observable<Todo | undefined> {
    return of(mockTodos.find((todo) => todo.id === todoId));
  }

  toggleTodoFavouriteById(
    todoId: number,
    favourite: boolean
  ): Observable<Todo | undefined> {
    return of(mockTodos.find((todo) => todo.id === todoId));
  }

  menuCollapsed = signal<boolean>(false);

  toggleMenuCollapsed() {
    this.menuCollapsed.update((c) => !c);
  }
}
