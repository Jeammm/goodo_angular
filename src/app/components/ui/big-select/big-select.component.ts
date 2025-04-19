import { Component, computed, input, output, signal } from '@angular/core';
import { SelectOption } from '../select/select.component';
import { ChevronDown, ChevronRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-big-select',
  imports: [LucideAngularModule],
  templateUrl: './big-select.component.html',
  styles: ``,
})
export class BigSelectComponent {
  placeholder = input<string>();
  options = input<SelectOption[]>([]);
  selected = input();
  disabled = input<boolean>(false);

  isDropDownOpen = signal<boolean>(false);

  readonly ChevronDown = ChevronDown;

  selectedLabel = computed(
    () => this.options().find((option) => option.id === this.selected())?.label
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
