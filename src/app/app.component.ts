import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideMenuComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  todoService = inject(TodoService)
}
