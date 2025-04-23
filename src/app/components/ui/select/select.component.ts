import { Component, computed, input, output, signal } from '@angular/core';
import { ChevronRight, Circle, LucideAngularModule } from 'lucide-angular';

export interface SelectOption {
  id: string;
  label: string;
  color?: string;
}

@Component({
  selector: 'app-select',
  imports: [LucideAngularModule],
  templateUrl: './select.component.html',
  styles: ``,
})
export class SelectComponent {
  placeholder = input<string>();
  options = input<SelectOption[]>([]);
  selected = input();
  disabled = input<boolean>(false);
  showCircle = input<boolean>(false);

  isDropDownOpen = signal<boolean>(false);

  readonly ChevronRight = ChevronRight;
  readonly Circle = Circle;

  selectedLabel = computed(
    () => this.options().find((option) => option.id === this.selected())?.label
  );
  selectedColor = computed(
    () => this.options().find((option) => option.id === this.selected())?.color
  );

  onSelect = output<SelectOption>();

  onOptionClick(option: SelectOption) {
    this.onSelect.emit(option);
  }

  toggleOpen() {
    if (!this.disabled()) {
      this.isDropDownOpen.update((open) => !open);
    }
  }
}
