import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu-link-button',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-link-button.component.html',
  styles: ``,
})
export class SideMenuLinkButtonComponent {
  linkTo = input<string>('');
  query = input<Record<string, string>>({});
  linkText = input<string>('');
}
