import { Component, computed, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import {
  Check,
  Circle,
  LucideAngularModule,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'app-side-menu-link-button',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './side-menu-link-button.component.html',
  styles: ``,
})
export class SideMenuLinkButtonComponent {
  linkTo = input<string>('');
  query = input<Record<string, string>>({});
  linkText = input<string>('');
  icon = input<LucideIconData>();
  dotColor = input<string>();

  dotFill = computed(() => {
    return this.dotColor() ? `fill-[${this.dotColor()}]` : ``;
  });

  readonly Circle = Circle;
}
