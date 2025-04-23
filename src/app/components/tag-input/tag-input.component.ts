import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagComponent } from '../ui/tag/tag.component';

@Component({
  selector: 'app-tag-input',
  imports: [CommonModule, FormsModule, TagComponent],
  templateUrl: './tag-input.component.html',
  styles: ``,
})
export class TagInputComponent {
  tag = signal<string>('');

  currentTags = input<string[]>([]);

  ontagSaved = output<string>();

  onTagRemove = output<string>();

  onEnter(event: Event) {
    const trimmed = this.tag().trim();

    event.preventDefault();
    event.stopPropagation();

    if (trimmed) {
      this.ontagSaved.emit(trimmed);
      this.tag.set('');
    }
  }
}
