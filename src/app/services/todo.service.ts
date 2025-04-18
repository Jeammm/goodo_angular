import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockTodos } from '../model/class/todo';
import { Todo } from '../model/class/todo'; // make sure to import the type

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

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
}
