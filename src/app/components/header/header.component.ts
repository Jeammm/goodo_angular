import { Component } from '@angular/core';
import { LucideAngularModule, Menu, ArrowDownWideNarrow, Bell } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  readonly MenuIcon = Menu;
  readonly ArrowDownWideNarrow = ArrowDownWideNarrow
  readonly Bell = Bell
}
