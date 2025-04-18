import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styles: ``
})
export class PrimaryButtonComponent {
  btnText = input<string>("")

  btnClicked = output()

  onClick () {
    
  }
}
