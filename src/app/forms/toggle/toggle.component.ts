import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'jsite-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnChanges {
  modelChange = new FormControl();
  @Input() model: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>()

  ngOnInit() {
    let hold = this.model
    this.modelChange.valueChanges
      .debounceTime(400)
      .subscribe((value) => {
        this.stateChange.emit(value)
      })
  }

  ngOnChanges(changes) {
    console.log(changes)
  }
}
