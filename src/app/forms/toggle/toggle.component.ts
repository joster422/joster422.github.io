import { Component, Input } from '@angular/core';

@Component({
  selector: 'jsite-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() model: boolean;
}
