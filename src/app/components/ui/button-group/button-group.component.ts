import { Component, input, output } from '@angular/core';

export interface ButtonGroupOption {
  id: string;
  label: string;
}

@Component({
  selector: 'app-button-group',
  imports: [],
  templateUrl: './button-group.component.html',
  styles: ``,
})
export class ButtonGroupComponent {
  buttonGroupItems = input<ButtonGroupOption[]>([]);

  disabled = input<boolean>(false);

  selectedItem = input<string>();

  onButtonClick = output<ButtonGroupOption>();

  onClickHandler(button: ButtonGroupOption) {
    this.onButtonClick.emit(button);
  }
}
