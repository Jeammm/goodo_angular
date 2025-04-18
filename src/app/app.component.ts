import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SideMenuComponent } from "./components/side-menu/side-menu.component";
import { ListSectionComponent } from "./components/list-section/list-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SideMenuComponent, ListSectionComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
}
