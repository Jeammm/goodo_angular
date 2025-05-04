import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/class/todo'; // make sure to import the type
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  search = signal<string>('');
  sort = signal<string>('priority');
  order = signal<string>('desc');
  reloadSignal = signal(0);

  onChangeSearch(q: string) {
    this.search.set(q);
  }

  getActiveTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getSoonTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getImportantTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getCompletedTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  getTodoById(todoId: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/${todoId}`);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  deleteTodoById(todoId: string): Observable<Todo | undefined> {
    return this.http.delete<Todo>(`${this.baseUrl}/${todoId}`);
  }

  updateTodo(todoId: string, todo: Partial<Todo>): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/${todoId}`, todo);
  }

  toggleTodoCompletedById(
    todoId: string,
    isDone: boolean
  ): Observable<Todo | undefined> {
    return this.http.patch<Todo>(`${this.baseUrl}/${todoId}`, { isDone });
  }

  toggleTodoFavoriteById(
    todoId: string,
    isFavorite: boolean
  ): Observable<Todo | undefined> {
    return this.http.patch<Todo>(`${this.baseUrl}/${todoId}`, { isFavorite });
  }

  menuCollapsed = signal<boolean>(false);

  toggleMenuCollapsed() {
    this.menuCollapsed.update((c) => !c);
  }
}
