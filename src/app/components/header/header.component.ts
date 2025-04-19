import { Component, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  Menu,
  ArrowDownWideNarrow,
  Bell,
  Search,
  ArrowUpWideNarrow,
} from 'lucide-angular';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { BigSelectComponent } from '../ui/big-select/big-select.component';
import { SelectOption } from '../ui/select/select.component';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, FormsModule, BigSelectComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  todoService = inject(TodoService);
  searchQuery: string = '';

  readonly MenuIcon = Menu;
  readonly ArrowDownWideNarrow = ArrowDownWideNarrow;
  readonly ArrowUpWideNarrow = ArrowUpWideNarrow;
  readonly Bell = Bell;
  readonly Search = Search;

  handleSearch(q: string) {
    this.todoService.onChangeSearch(q);
  }

  readonly sortByOptions: SelectOption[] = [
    {
      id: 'priority',
      label: 'Priority',
    },
    {
      id: 'due',
      label: 'Due date',
    },
  ];

  sortBy = signal<string>('priority');

  onSelectSortBy(sortBy: SelectOption) {
    this.sortBy.set(sortBy.id);
  }

  orderBy = signal<string>('desc');

  onToggleOrderBy() {
    this.orderBy.update((o) => (o === 'desc' ? 'acs' : 'desc'));
  }

  onToggleMenuCollapse() {
    this.todoService.toggleMenuCollapsed();
  }
}
