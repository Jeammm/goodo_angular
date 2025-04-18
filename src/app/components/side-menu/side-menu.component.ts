import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryButtonComponent } from "../ui/primary-button/primary-button.component";
import { SideMenuLinkButtonComponent } from "../ui/side-menu-link-button/side-menu-link-button.component";

@Component({
  selector: 'app-side-menu',
  imports: [RouterModule, PrimaryButtonComponent, SideMenuLinkButtonComponent],
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {}
