import { Component, input, output } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-tag',
  imports: [LucideAngularModule],
  templateUrl: './tag.component.html',
  styles: ``,
})
export class TagComponent {
  text = input<string>();
  clickable = input<boolean>(false);

  onTagClick = output();

  readonly X = X;

  tagClickHandler() {
    this.onTagClick.emit();
  }
}
