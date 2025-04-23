import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Circle, LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-side-menu-link-button',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule, NgStyle],
  templateUrl: './side-menu-link-button.component.html',
  styles: ``,
})
export class SideMenuLinkButtonComponent {
  linkTo = input<string>('');
  query = input<Record<string, string>>({});
  linkText = input<string>('');
  icon = input<LucideIconData>();
  dotColor = input<string>();
  collapsed = input<boolean>(false);

  readonly Circle = Circle;
}
