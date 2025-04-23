import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [NgStyle],
  templateUrl: './primary-button.component.html',
  styles: ``,
})
export class PrimaryButtonComponent {
  btnText = input<string>('');
  collapsed = input<boolean>(false);

  btnClicked = output();

  onClick() {
    this.btnClicked.emit();
  }
}
